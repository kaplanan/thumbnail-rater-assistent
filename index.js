import OpenAI from 'openai'
import fs from 'fs'

const apiKey = '<API_KEY>'
const assistant_id = '<ASSISTENT_ID>'
const title = '<VIDEO_TITLE>'
const description = '<DESCRIPTION>'
const thumbnailFile = '<PATH_TO_FILE>'

const openai = new OpenAI({ apiKey })

// upload thumbnail file to OAI
const file = await openai.files.create({
    file: fs.createReadStream(`./${thumbnailFile}.png`),
    purpose: "vision",
  })

console.log(`Uploaded file ${file.id} successfully.`)

// prepare thread with message
const message = {
    role: "user",
    content: [
        { type: 'text', text: `Rate this thumbnail with respect to this video title ${title} and also this description ${description}` },
        { type: 'image_file', image_file: { file_id: file.id} }
    ]
}

// create assistant thread
const thread = await openai.beta.threads.create({
    messages: [message]
})

console.log(`Thread created [threadId=${thread.id}]`)

// send message & get latest response from assistant thread
const run = await openai.beta.threads.runs.createAndPoll(
    thread.id,
    { assistant_id }
)

console.log(`Run created [runId=${run.id}]`)

const getLastMessage = async (threadId) => {
    const threadMessages = await openai.beta.threads.messages.list(threadId)
    const responseMsgId = threadMessages.data[0].id
    const message = await openai.beta.threads.messages.retrieve(threadId, responseMsgId)
    const response = message.content[0].text.value
    return response
}

const response = await getLastMessage(run.thread_id)

console.log(`Response retrieved [response=${response}]`)
fs.writeFile('./response.md', response, () => {})