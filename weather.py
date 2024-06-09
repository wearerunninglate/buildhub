import json
import urllib3
import csv
import boto3
from io import StringIO

def lambda_handler(event=None, context=None):
    # Replace with your actual API key
    api_key = 'addyourown'
    city = 'Sydney'
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'

    http = urllib3.PoolManager()
    response = http.request('GET', url)

    # Decode the response and parse it as JSON
    weather_data = json.loads(response.data.decode('utf-8'))

    # Print the entire response for debugging
    print('Weather Data:', weather_data)

    # Check if the 'main' key exists in the response
    if 'main' in weather_data:
        # Prepare CSV data
        csv_buffer = StringIO()
        csv_writer = csv.writer(csv_buffer)

        # Write headers
        headers = [
            'City', 'Temperature', 'Feels Like', 'Temp Min', 'Temp Max', 'Pressure',
            'Humidity', 'Visibility', 'Wind Speed', 'Wind Degree', 'Cloudiness',
            'Weather Main', 'Weather Description'
        ]
        csv_writer.writerow(headers)

        # Write data
        row = [
            city,
            weather_data['main']['temp'],
            weather_data['main']['feels_like'],
            weather_data['main']['temp_min'],
            weather_data['main']['temp_max'],
            weather_data['main']['pressure'],
            weather_data['main']['humidity'],
            weather_data.get('visibility', ''),
            weather_data['wind']['speed'],
            weather_data['wind']['deg'],
            weather_data['clouds']['all'],
            weather_data['weather'][0]['main'],
            weather_data['weather'][0]['description']
        ]
        csv_writer.writerow(row)
        
        # Upload CSV to S3
        s3 = boto3.client('s3')
        bucket_name = 'wearerunninglate'
        folder_name = 'weather_data'
        file_name = 'weather_data.csv'
        s3_key = f'{folder_name}/{file_name}'
        s3.put_object(Bucket=bucket_name, Key=s3_key, Body=csv_buffer.getvalue())

        # Return a response
        return {
            'statusCode': 200,
            'body': json.dumps({
                'weather_data': weather_data,
                's3_file': f's3://{bucket_name}/{file_name}'
            })
        }
    else:
        # Handle the case where 'main' key is not present
        return {
            'statusCode': 500,
            'body': json.dumps({
                'error': 'Unable to retrieve temperature from the weather data.',
                'weather_data': weather_data
            })
        }

# Example call to the lambda_handler function for local testing
if __name__ == '__main__':
    print(lambda_handler())
