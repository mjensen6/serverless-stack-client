const config = {
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-uploads-jensen",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://6fwn6e2si3.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_wRbHxZDNc",
        APP_CLIENT_ID: "7jm9di2r37mm3d56jcogpu2fr1",
        IDENTITY_POOL_ID: "us-east-2:674ae35a-726f-4a82-b62d-dc0c9c5310bf",
    },
};

export default config;