#!/usr/bin/env python
import os
from dotenv import load_dotenv
import pandas as pd
from sodapy import Socrata


#init env sys vars
def _init_env(file, vars):
    load_dotenv(file)
    if vars is not None:
        for env in vars:
            if "=" in env:
                env = env.split("=", 1)
                os.environ[env[0]] = env[1]


path = "/Users/bitterfq/oak-crime-watch/.env"
_init_env(path, ['API_KEY_ID', 'API_KEY_SECRET',
          'APP_TOKEN', 'APP_SECRET_TOKEN', 'USER_NAME', 'PASSWRD'])

# authenticated client :
client = Socrata("data.oaklandca.gov"   ,
                  os.environ['APP_TOKEN'],
                  os.environ['USER_NAME'],
                  os.environ['PASSWRD'])

# First 2000 results, returned as JSON from API / converted to Python list of
# dictionaries by sodapy.
results = client.get("ym6k-rx7a", limit=2000)

# Convert to pandas DataFrame
results_df = pd.DataFrame.from_records(results)
results_df.to_csv('public/scripts/out.csv')

print("EXIT(0)")