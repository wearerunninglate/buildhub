import requests
import os
import json
from dotenv import load_dotenv

def authorise():
    load_dotenv()

    api_client_id = os.getenv('api_client_id')
    api_client_secret = os.getenv('api_client_secret')


    app_id = os.getenv('app_id')
    app_secret = os.getenv('app_secret')

    url = "https://sandbox-api.sahha.ai/api/v1/oauth/account/token"

    headers = {
        "Content-Type": "application/json",
    }

    payload = {
        "clientId": api_client_id,
        "clientSecret": api_client_secret
    }

    auth_response = requests.post(url, json=payload, headers=headers)
    account_token = auth_response.json().get('accountToken')

    return account_token


def register():
    account_token = authorise()

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"account {account_token}"
    }

    payload = {
        "externalId": "123456-14f9-47ef-b6f8-80a18b206a8e"
    }

    token_response = requests.post("https://sandbox-api.sahha.ai/api/v1/oauth/profile/register",json=payload, headers=headers)
    profile_token = token_response.json().get('profileToken')

    return profile_token

def get_data(url: str, token: str) -> json:

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"profile {token}"
    }
    response = requests.get(url=url,headers=headers)

    return response


def main():
    profile_token = register()

    demographic_url= 'https://sandbox-api.sahha.ai/api/v1/profile/demographic'
    print(get_data(url=demographic_url, token=profile_token))


if __name__ == "__main__":
    main()

