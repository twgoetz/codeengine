#!/usr/bin/env sh

curl -fsSL https://clis.cloud.ibm.com/install/linux | sh
ibmcloud plugin install code-engine -f

# Login
# ibmcloud login -a https://cloud.ibm.com -g Default -r us-south --apikey ${CE_API_KEY}

# Select project and update app
exit 0
