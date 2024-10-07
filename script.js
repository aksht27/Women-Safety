const{ GoogleGenerativeAI } = require("@google/generative-ai"); 
const genAI=new GoogleGenerativeAI("AIzaSyA070LLIf7schaGq_3pfgvpaELmXwB4xTc");
async function run(){
    const model =genAI.getGenerativeModel({model:"gemini-pro"});
    const prompt="I Need Assistance"   
    const result= await model.generateContent(prompt);
    const response=await result.response;
    const text=response.text();
    console.log(text);
}
run();