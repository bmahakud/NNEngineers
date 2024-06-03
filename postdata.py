


import requests
import json

# Define the URL
url = "https://diracai.com/api/postwaterdata/"

# Define the JSON data
data = {
    "esrlevel": "1244",
    "ugrlevel": "2244",
    "flowrateline01": "111",
    "pressureline01": "222",
    "flowrateline02": "123",
    "pressureline02": "11",
    "flowrateline03": "321",
    "pressureline03": "233"
}

# Convert the dictionary to a JSON string
json_data = json.dumps(data)

# Set the headers
headers = {
    'Content-Type': 'application/json'
}

# Make the POST request
response = requests.post(url, data=json_data, headers=headers)

# Print the response status code and content
print(f"Status Code: {response.status_code}")
print(f"Response Content: {response.content}")

