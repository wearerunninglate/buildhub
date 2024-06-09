import json
import boto3
import openai
import urllib.request

def generate_response(prompt, model="gpt-4-turbo", max_tokens=150):
    response = openai.ChatCompletion.create(
        model=model,
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=max_tokens
    )
    return response['choices'][0]['message']['content'].strip()

def lambda_handler(event, context):
    openai.api_key = 'addyour own'
    
    # Get the bucket and object key from the event
    bucket_name = 'wearerunninglate'
    folder_name = 'correlation_results'
    file_name = 'temp.json'
    s3_key = f'{folder_name}/{file_name}'

    # Create an S3 client
    s3 = boto3.client('s3')
    
    # Get the object from S3
    response = s3.get_object(Bucket=bucket_name, Key=s3_key)
    
    # Read the content of the object
    content = response['Body'].read().decode('utf-8')
    
    # Parse the JSON content
    json_content = json.loads(content)
    
    # Extract specific values
    latest_weather_value = json_content.get('latest_weather_value')
    highest_correlated_type = json_content.get('highest_correlated_type', {})
    second_highest_correlated_type = json_content.get('second_highest_correlated_type', {})
    third_highest_correlated_type = json_content.get('third_highest_correlated_type', {})

    # Print the extracted values
    print(f"Latest Weather Value: {latest_weather_value}")
    print(f"Highest Correlated Type: {highest_correlated_type.get('type')}")
    print(f"Highest Driver: {highest_correlated_type.get('highest_driver')}")
    print(f"Correlation Type: {highest_correlated_type.get('correlation_type')}")
    print(f"Second Highest Correlated Type: {second_highest_correlated_type.get('type')}")
    print(f"Second Highest Driver: {second_highest_correlated_type.get('second_highest_driver')}")
    print(f"Correlation Type: {second_highest_correlated_type.get('correlation_type')}")

    prompt_injection = f"""Given that the weather is {latest_weather_value}, 
    the trait that is most aligned with this is {highest_correlated_type.get('type')}, which is
    driven by {highest_correlated_type.get('highest_driver')} which has a {highest_correlated_type.get('correlation_type')} correlation.
    The second most correlated type is {second_highest_correlated_type.get('type')} which is driven by {second_highest_correlated_type.get('second_highest_driver')} with a {second_highest_correlated_type.get('correlation_type')} correlation."""

    print(prompt_injection)
    
    bland_ai_prompt = (
        "You: Based on your data, here are some key insights:\n\n"
        "Daily Health Summary: Your average heart rate is 72 bpm, you've taken 8,500 steps, and you had 7 hours of sleep, with 1.5 hours in deep sleep.\n"
        "Weather Impact Analysis: Today’s weather is sunny and 25°C, with a forecast of rain in the afternoon. The air quality is moderate.\n"
        "Mental Health Insights: Your current stress level is moderate, possibly due to the lack of deep sleep recently.\n"
        "Person: Wow, that's very detailed. What should I do next?\n\n"
        "You: Here are some personalized recommendations for you:\n\n"
        "Physical Activity: Aim to maintain at least 8,000 steps daily. This will help you stay active and healthy.\n"
        "Sleep Improvement: Consider taking a short nap or practicing relaxation techniques to improve your sleep quality.\n"
        "Stress Management: Practice mindfulness or breathing exercises to manage stress, especially since your stress levels are moderate.\n"
    )
        
    final_prompt = f"""
    Goal:
    Call Richard to provide personalized health and wellness insights
    Background:
    You are Maya, a personalized AI health coach 
    Example Dialogue:
    You: Hello, this is Maya, your AI health coachAm I speaking with Richard?
    Person: Yes, this is Richard.
    You: I wanted to provide you with some personalized health and wellness. This data will help you achieve better health and mental well-being. Would you like to hear them?
    Person: That sounds great! What kind of insights do you have for me?
    
    Latest Information:
    {prompt_injection}
    

    Return JUST the updated transcript.
    """
        
    response = generate_response(final_prompt)
    
    data = {
        "phone_number": "+61431769571",
        "from": None,
        "task": final_prompt,
        "model": "enhanced",
        "language": "en",
        "voice": "maya",
        "voice_settings": {},
        "local_dialing": False,
        "max_duration": 12,
        "answered_by_enabled": False,
        "wait_for_greeting": False,
        "record": False,
        "amd": False,
        "interruption_threshold": 100,
        "temperature": None,
        "transfer_list": {},
        "metadata": {},
        "pronunciation_guide": [],
        "start_time": None,
        "request_data": {},
        "tools": [],
        "webhook": None,
        "calendly": {}
    }
    
    data = json.dumps(data).encode('utf-8')
    headers = {
        'Authorization': 'addyourown',
        'Content-Type': 'application/json'
    }

    url = 'https://api.bland.ai/v1/calls'
    req = urllib.request.Request(url, data=data, headers=headers)

    try:
        with urllib.request.urlopen(req) as response:
            response_body = response.read().decode('utf-8')
            print("Call initiated successfully.")
            print(response_body)
            return {
                'statusCode': 200,
                'body': json.loads(response_body)
            }
    except urllib.error.HTTPError as e:
        error_message = f"Failed to initiate call. Status code: {e.code}, Response: {e.read().decode('utf-8')}"
        print(error_message)
        return {
            'statusCode': e.code,
            'body': error_message
        }
    except urllib.error.URLError as e:
        error_message = f"Failed to initiate call. Reason: {e.reason}"
        print(error_message)
        return {
            'statusCode': 500,
            'body': error_message
        }
