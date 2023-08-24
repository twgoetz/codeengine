const cloudCore = require('ibm-cloud-sdk-core');
const codeEngineV2 = require('@ibm-cloud/ibm-code-engine-sdk/dist/code-engine/v2');

async function main() {
  try {
    // Load secrets from Code Engine
    const iamAuthenticator = new cloudCore.IamAuthenticator({ apikey: process.env.CODE_ENGINE_API_KEY });
    console.log(`Batch job completed successfully`);
  } catch (error) {
    console.error('Error processing batch job:', error);
  }  
}

main();
