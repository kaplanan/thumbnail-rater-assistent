# RateMyThumbnail

RateMyThumbnail is a Node.js script that uses OpenAI's API to rate video thumbnails based on a given title and description. The script uses OpenAI's Assistant API to create a thread and send a message to the assistant. The assistant then rates the thumbnail based on the given title and description.

> Youtube - [Ayhan - Code Your Own AI Assistant (in 15 Minutes)](https://youtu.be/tomw0ST4H8U)

Check out the official site: https://betterthumbnails.app/

## Prerequisites

- Node.js
- An OpenAI API key ([https://platform.openai.com/api-keys](https://platform.openai.com/api-keys))
- An OpenAI assistant ID ([https://platform.openai.com/assistants](https://platform.openai.com/assistants))

## Installation

1. Clone this repository or download the source code.

2. Navigate to the project directory:

   ```
   cd ratemythumbnail
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

## Configuration

Before running the script, you need to set up the following in the `index.js` file:

1. Replace `<API_KEY>` with your OpenAI API key.
2. Replace `<ASSISTANT_ID>` with your OpenAI assistant ID.
3. Set `<VIDEO_TITLE>` to your video title.
4. Set `<DESCRIPTION>` to your video description.
5. Set `<PATH_TO_FILE>` to the path of your thumbnail image file (without the .png extension).

## Usage

To run the script, use the following command:

```
node index.js
```

The script will upload the thumbnail image, create a thread, and send the message to the assistant. It will then retrieve the latest response and display it.

## License

This project is licensed under the MIT License.
