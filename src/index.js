class ChatGPTExtension {
  constructor() {
    this.handleRequest()
  }

  handleRequest() {
    chrome.runtime.onMessage.addListener(
      (request, sender, sendResponse) => {
        if (request.action == 'PROMPT') this.promptToChatGPT()
         
        console.log(request)
      }
    )
  }
  promptToChatGPT() {
    const prompt = "From now on, if you need to write a mathematical expression, use katex notation and follow these rules:\n1. If it is a block equation, display it in a single P element and wrap it with double dollar signs like this:\n\n$$e=mc^{2}$$\n\n2. If it is an inline equation, use the two backslash and parenthesis notation of katex, like this: \\(e^{i \\\pi}-1=0\\).\n\nCan you give me an example of a block equation to see that you understand?";

    const input = document.querySelector('textarea')
    input.focus();
    input.value = prompt
    input.querySelector('textarea~button').click()
    
  }

}

const chatGPTExtension = new ChatGPTExtension()
