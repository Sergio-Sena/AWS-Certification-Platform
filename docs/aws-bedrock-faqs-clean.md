# Amazon Bedrock FAQs (Clean)

Build Generative AI Applications with Foundation Models - Amazon Bedrock FAQs - AWS
Skip to main content
Filter: All
English
Contact us
AWS Marketplace
Support
My account
Search
Filter: All
Sign in to console
Create account
Amazon Bedrock
Overview
Getting Started
Capabilities
Agents
Pricing
More
Generative AI
Amazon Bedrock
FAQs
Amazon Bedrock FAQs
General
11
Agents
8
Security
4
SDK
2
Billing and support
4
Customization
7
Amazon Titan
2
Knowledge Bases / RAG
8
Model evaluation
5
Guardrails
15
Marketplace
4
Data Automation
7
Amazon Bedrock in SageMaker Unified Studio
11
General
Open all
What is Amazon Bedrock?
Amazon Bedrock is a fully managed service that offers a choice of industry leading foundation models (FMs) along with a broad set of capabilities that you need to build generative AI applications, simplifying development with security, privacy, and responsible AI. With the comprehensive capabilities of Amazon Bedrock, you can experiment with a variety of top FMs, customize them privately with your data using techniques such as fine-tuning and retrieval-augmented generation (RAG), and create managed agents that execute complex business tasks—from booking travel and processing insurance claims to creating ad campaigns and managing inventory—all without writing any code. Since Amazon Bedrock is serverless, you don't have to manage any infrastructure, and you can securely integrate and deploy generative AI capabilities into your applications using the AWS services you are already familiar with.
Which FMs are available in Amazon Bedrock?
Amazon Bedrock customers can choose from some of the most cutting-edge FMs available today. This includes models from:
AI21 Labs
Amazon
Anthropic
Cohere
DeepSeek
Luma AI
Meta
Mistral AI
OpenAI
poolside (coming soon)
Stability AI
TwelveLabs
Writer
See here for supported foundation models from each provider:
https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html
Why should I use Amazon Bedrock?
There are five reasons to use Amazon Bedrock for building generative AI applications.
Choice of leading FMs: Amazon Bedrock offers an easy-to-use developer experience to work with a broad range of high-performing FMs from leading AI companies. You can quickly experiment with a variety of FMs in the playground, and use a single API for inference regardless of the models you choose, giving you the flexibility to use FMs from different providers and keep up to date with the latest model versions with minimal code changes.
Easy model customization with your data: Privately customize FMs with your own data through a visual interface without writing any code. Simply select the training and validation data sets stored in Amazon Simple Storage Service (Amazon S3) and, if required, adjust the hyperparameters to achieve the best possible model performance.
Fully managed agents that can invoke APIs dynamically to execute tasks: Build agents that execute complex business tasks—from booking travel and processing insurance claims to creating ad campaigns, preparing tax filings, and managing your inventory—by dynamically calling your company systems and APIs. Fully managed agents for Amazon Bedrock extend the reasoning capabilities of FMs to break down tasks, create an orchestration plan, and execute it.
Native support for RAG to extend the power of FMs with proprietary data:&nbsp;With Amazon Bedrock Knowledge Bases, you can securely connect FMs to your data sources for retrieval augmentation—from within the managed service—extending the FM’s already powerful capabilities and making it more knowledgeable about your specific domain and organization.
Data security and compliance certifications: Amazon Bedrock offers several capabilities to support security and privacy requirements. Amazon Bedrock is in scope for common compliance standards such as Service and Organization Control (SOC), International Organization for Standardization (ISO), is Health Insurance Portability and Accountability Act (HIPAA) eligible, and customers can use Amazon Bedrock in compliance with the General Data Protection Regulation (GDPR). Amazon Bedrock is CSA Security Trust Assurance and Risk (STAR) Level 2 certified, which validates the use of best practices and the security posture of AWS cloud offerings. With Amazon Bedrock, your content is not used to improve the base models and is not shared with any model providers. Your data in Amazon Bedrock is always encrypted in transit and at rest, and you can optionally encrypt the data using your own keys. You can use AWS PrivateLink with Amazon Bedrock to establish private connectivity between your FMs and your Amazon Virtual Private Cloud (Amazon VPC) without exposing your traffic to the Internet.
How can I get started with Amazon Bedrock?
With the serverless experience of Amazon Bedrock, you can quickly get started. Navigate to Amazon Bedrock in the AWS Management Console and try out the FMs in the playground. You can also create an agent and test it in the console. Once you’ve identified your use case, you can easily integrate the FMs into your applications using AWS tools without having to manage any infrastructure.
Link to Amazon Bedrock getting started course
Link to Amazon Bedrock user guide
What are the most common use cases for Amazon Bedrock?
You can quickly get started with use cases:
Create new pieces of original content, such as short stories, essays, social media posts, and web page copy.
Search, find, and synthesize information to answer questions from a large corpus of data.
Create realistic and artistic images of various subjects, environments, and scenes from language prompts.
Help customers find what they’re looking for with more relevant and contextual product recommendations than word matching.
Get a summary of textual content such as articles, blog posts, books, and documents to get the gist without having to read the full content.
Suggest products that match shopper preferences and past purchases
Explore more generative AI use cases.
What is Amazon Bedrock Playground?
Amazon Bedrock offers a playground that allows you to experiment with various FMs using a conversational chat interface. You can provide a prompt and use a web interface inside the console to supply a prompt and use the pretrained models to generate text or images, or alternatively use a fine-tuned model that has been adapted for your use case.
In which AWS Regions is Amazon Bedrock available?
For a list of AWS Regions where Amazon Bedrock is available, see&nbsp;Amazon Bedrock endpoints and quotas in the Amazon Bedrock Reference Guide.
How do I customize a model on Amazon Bedrock?
You can easily fine-tune FMs on Amazon Bedrock using tagged data or by using continued pre-train feature to customize the model using non-tagged data. To get started, provide the training and validation dataset, configure hyperparameters (epochs, batch size, learning rate, warmup steps) and submit the job. Within a couple of hours, your fine-tuned model can be accessed with the same API (InvokeModel).
Can I train a model and deploy it on Amazon Bedrock?
Yes, you can train select publicly available models and import them into the Amazon Bedrock using the Custom Model Import feature. Currently, this feature only supports Llama 2/3, Mistral, and Flan architectures. For additional information, please refer the documentation.
What is latency-optimized inference in Amazon Bedrock?
Available in public preview, latency-optimized inference in Amazon Bedrock offers reduced latency without compromising accuracy. As verified by Anthropic, with latency-optimized inference on Amazon Bedrock, Claude 3.5 Haiku runs faster on AWS than anywhere else. Additionally, with latency-optimized inference in Bedrock, Llama 3.1 70B and 405B runs faster on AWS than any other major cloud provider. Using purpose-built AI chips like AWS Trainium2 and advanced software optimizations in Amazon Bedrock, customers can access more options to optimize their inference for a particular use case.
Key Features:
Reduces response times for foundation model interactions
Maintains accuracy while improving speed
Requires no additional setup or model fine-tuning
Supported Models: Anthropic's Claude 3.5 Haiku and Meta's Llama 3.1 models 405B and 70B
Availability: The US East (Ohio) Region via cross-region inference
To get started, visit the Amazon Bedrock console. For more information visit the Amazon Bedrock documentation.
How do we get started with latency-optimized inference in Amazon Bedrock?
Accessing the latency-optimized inference in Amazon Bedrock requires no additional setup or model fine-tuning, allowing for immediate enhancement of existing generative AI applications with faster response times. You can toggle on the “Latency optimized” parameter while invoking the Bedrock inference API.
To get started, visit the&nbsp;Amazon Bedrock console. For more information visit the&nbsp;Amazon Bedrock documentation.
Agents
Open all
What is Amazon Bedrock AgentCore?
AgentCore enables developers to accelerate AI agents into production with the scale, reliability, and security, critical to real-world deployment. AgentCore provides tools and capabilities to make agents more effective and capable, purpose-built infrastructure to securely scale agents, and controls to operate trustworthy agents. AgentCore capabilities are composable and work with popular open-source frameworks and any model, so you don’t have to choose between open-source flexibility and enterprise-grade security and reliability. Learn more about AgentCore.
Who is AgentCore designed for?
AgentCore is designed for organizations who want to move AI agents from proofs of concept built using open source or custom agent frameworks to production. It serves developers and enterprises who need robust infrastructure to support dynamic execution paths at runtime, controls to monitor behavior, powerful tools to enhance agents, and the flexibility to adapt as the landscape evolves.
What key capabilities does AgentCore provide?
AgentCore includes services and tools that offer unique capabilities. These include:
Runtime: A secure, serverless runtime purpose-built for deploying and scaling dynamic AI agents and tools.
Memory: Makes it easy for developers to build context-aware agents by eliminating complex memory infrastructure management while providing full control over what the AI agent remembers.
Gateway: Provides a secure way for agents to discover and use tools along with easy transformation of APIs, Lambda functions, and existing services into agent-compatible tools.
Policy: Gives you deterministic control over what your agents can do. Define fine-grained rules using natural language or Cedar that authorize every tool call at the gateway, ensuring agents operate within defined boundaries without slowing them down.
Browser: Provides a fast, secure, cloud-based browser runtime to enable AI agents to interact with websites at scale.
Code Interpreter: Enables AI agents to write and execute code securely in sandbox environments, enhancing their accuracy and expanding their ability to solve complex end-to-end tasks.
Identity: Enables AI agents to securely access AWS services and third-party tools on behalf of users or autonomously with pre-authorization.
Observability: Gives developers complete visibility into agent workflows to trace, debug, and monitor AI agents' performance in production environments. With support for OpenTelemetry compatible telemetry and detailed visualizations of each step of the agent workflow, AgentCore enables developers to easily gain visibility into agent behavior and maintain quality standards at scale.
Evaluations: Provides automated, continuous quality assessment for AI agents in production. Run built-in or custom evaluators against production traffic to measure performance, catch regressions early, and optimize based on real usage patterns.
AWS Agent Registry: A centralized catalog to discover, share, and reuse agents, tools, and skills across your organization. Governed publishing workflows and semantic search ensure teams find what already exists before building from scratch.
Learn more about AgentCore.
Which agent frameworks does AgentCore support?
AgentCore works with any open source agent framework including popular open-source frameworks like CrewAI, LangGraph, Strands Agents, and custom frameworks.
What is Amazon Bedrock Managed Agents, powered by OpenAI (preview)?
Amazon Bedrock Managed Agents, powered by OpenAI, combines OpenAI frontier reasoning models and OpenAI harness with the reliability, security, and richness of AWS services that millions of organizations already rely on. Everything your agent needs is included from the start: memory, skills, identity, security, and compute. The agent harness works with the model to manage the full reasoning cycle: understanding tasks, calling tools, observing results, and continuing until the work is done. Because memory persists across sessions, every interaction builds on the last, and your agents only get more effective over time. All model inference runs on Amazon Bedrock and your data never leaves AWS.
Learn more on the Bedrock Managed Agents overview page.
How do I get started with Bedrock Managed Agents (preview)?
Bedrock Managed Agents is currently in preview. To be kept in the loop on latest developments, sign up through the interest form.
How does Bedrock Managed Agents (preview) relate to Amazon Bedrock AgentCore?
They are designed to work together. Bedrock Managed Agents is optimized for building with OpenAI frontier models and agentic capabilities. AgentCore is the open platform to build, connect, and optimize agents at scale using any model and framework. AgentCore provides the managed execution environments for Bedrock Managed Agents, and as your agent footprint expands across your enterprise, AgentCore and Bedrock Managed Agents will provide additional capabilities such as authorization policy enforcement, agent and agent tool discovery, and observability and evaluation capabilities.&nbsp;
Learn more about Bedrock Managed Agents and AgentCore.
I am using Amazon Bedrock Agents today. Should I switch to AgentCore?
If you are using Amazon Bedrock Agents today, you can continue to use it. However, if you need additional functionalities such as being able to use any agent authoring framework (such as Strands Agents, Crew AI, LangGraph, LangChain, or LlamaIndex) and use any model along with fine-grained control on identity, memory, and observability, we recommend using AgentCore. AgentCore also provides upgraded tools and infrastructure for running agents at scale including identity, customizable long-term memory, an enhanced code interpreter tool, built-in browser tool, observability, native support for Model Context Protocol for connection to thousands of tools and a runtime with industry-leading execution time, payload size, and complete session isolation. To help customers take advantage of these improvements, we will have an option to easily export existing Bedrock Agents configurations as code that is compatible with Strands (for orchestration) and AgentCore (for production-grade deployment and more).
Security
Open all
Is the content processed by Amazon Bedrock moved outside the AWS Region where I am using Amazon Bedrock?
Any customer content processed by Amazon Bedrock is encrypted and stored at rest in the AWS Region where you are using Amazon Bedrock.
Are user inputs and model outputs made available to third-party model providers?
No. Users' inputs and model outputs are not shared with any model providers.
What security and compliance standards does Amazon Bedrock support?
Amazon Bedrock offers several capabilities to support security and privacy requirements. Amazon Bedrock is in scope for common compliance standards such as&nbsp;Fedramp Moderate, Service and Organization Control (SOC), International Organization for Standardization (ISO), Health Insurance Portability and Accountability Act (HIPAA) eligibility, and customers can use Bedrock in compliance with the General Data Protection Regulation (GDPR). Amazon Bedrock is included in the scope of the SOC 1, 2, 3 reports, allowing customers to gain insights into our security controls. We demonstrate compliance through extensive third-party audits of our AWS controls. Amazon Bedrock is one of the AWS services under ISO Compliance for the ISO 9001, ISO 27001, ISO 27017, ISO 27018, ISO 27701, ISO 22301, and ISO 20000 standards. Amazon Bedrock is CSA Security Trust Assurance and Risk (STAR) Level 2 certified, which validates the use of best practices and the security posture of AWS cloud offerings. With Amazon Bedrock, your content is not used to improve the base models and is not shared with any model providers. You can use AWS PrivateLink to establish private connectivity from Amazon VPC to Amazon Bedrock, without having to expose your data to internet traffic.
Will AWS and third-party model providers use customer inputs to or outputs from Amazon Bedrock to train Amazon Nova, Amazon Titan or any third-party models?
No, AWS and the third-party model providers will not use any inputs to or outputs from Amazon Bedrock to train Amazon Nova, Amazon Titan, or any third-party models.
SDK
Open all
What SDKs are supported for Amazon Bedrock?
Amazon Bedrock supports SDKs for runtime services. iOS and Android SDKs, as well as Java, JS, Python, CLI, .Net, Ruby, PHP, Go, and C++, support both text and speech input.
What SDKs support streaming functionality?
Streaming is supported on all the SDKs.
Billing and support
Open all
How much does Amazon Bedrock cost?
Please see the&nbsp;Amazon Bedrock pricing page for current pricing information.
What support is provided for Amazon Bedrock?
Depending on your AWS Support contract, Amazon Bedrock is supported under Developer Support, Business Support and Enterprise Support plans.
How can I track the input and output tokens?
You can use CloudWatch metrics to track the inputs and output token.
Why do I see a billing entry for AWS Marketplace for my usage of AWS Bedrock?
Customers will see an AWS Marketplace bill for certain Bedrock serverless models and Bedrock Marketplace models. This is because these models are sold by third party providers as "Third-Party Content", as described in the AWS service terms section 50.12.
Customization
Open all
How can I securely use my data to customize FMs available through Amazon Bedrock?
With Amazon Bedrock, you can privately customize FMs, retaining control over how your data is used and encrypted. Amazon Bedrock makes a separate copy of the base FM and trains this private copy of the model. Your data including prompts, information used to supplement a prompt, and FM responses. Customized FMs remain in the Region where the API call is processed.
How does Amazon Bedrock ensure my data used in fine-tuning remains private and confidential?
When you’re fine-tuning a model, your data is never exposed to the public internet, never leaves the AWS network, is securely transferred through your VPC, and is encrypted in transit and at rest. Amazon Bedrock also enforces the same AWS access controls that you have with any of our other services.
Does Amazon Bedrock support continued pretraining?
We launched continued pretraining for Amazon Titan Text Express and Amazon Titan models on Amazon Bedrock. Continued pretraining allows you to continue the pretraining on an Amazon Titan base model using large amounts of unlabeled data. This type of training will adapt the model from a general domain corpus to a more specific domain corpus such as medical, law, finance, and so on, while still preserving most of the capabilities of the Amazon Titan base model.&nbsp;
Why should I use continued pretraining in Amazon Bedrock?
Enterprises may want to build models for tasks in a specific domain. The base models may not be trained on the technical jargon used in that specific domain. Thus, directly fine-tuning the base model requires large amounts of labeled training records and a long training duration to get accurate results. To ease this burden, the customer can instead provide large amounts of unlabeled data for a continued pretraining job. This job will adapt the Amazon Titan base model to the new domain. Then the customer may fine-tune the newly pretrained custom model to downstream tasks, using significantly fewer labeled training records and with a shorter training duration.&nbsp;
How does the continued pretraining feature relate to other AWS services?
Amazon Bedrock continued pretraining and fine-tuning have very similar requirements. For this reason, we are choosing to create unified APIs that support both continued pretraining and fine-tuning. Unification of the APIs reduces the learning curve and will help customers use standard features such as Amazon EventBridge to track long running jobs, Amazon S3 integration for fetching training data, resource tags, and model encryption.&nbsp;
How do I use continued pre-training?
Continued pretraining helps you adapt the Amazon Titan models to your domain specific data while still preserving the base functionality of the Amazon Titan models. To create a continued pretraining job, navigate to the Amazon Bedrock console and click on "Custom Models." You will navigate to the custom model page that has two tabs: Models and Training jobs. Both tabs provide a “Customize Model” drop-down menu on the right. Select “Continued Pretraining” from the drop-down menu to navigate to “Create Continued Pretraining Job." You will provide the source model, name, model encryption, input data, hyper-parameters and output data. Additionally, you can provide tags, along with details about AWS Identity and Access Management (IAM) roles and resource policies for the job.
When do I use Amazon Bedrock or Amazon SageMaker AI for model fine-tuning?
We recommend you use Amazon Bedrock for model fine-tuning when you:
Are a generative AI application builder who wants a managed API-driven approach, fewer hyperparameters, and an abstraction of the complexity associated with model training.
Require minimal infrastructure overhead, have little to no existing ML infrastructure investments to consider, and are looking to deploy quickly in a serverless manner.
We recommend you use Amazon SageMaker AI for model fine-tuning when you:
Are a data scientist, ML engineer, or AI model developer who wants access to advanced customization techniques such as knowledge distillation, supervised fine tuning, or direct preference optimization, for both full weights and parameter efficient fine-tuning. SageMaker AI also provides the ability to customize your training recipe and model architecture.
Have established ML workflows and infrastructure investments aimed at having greater control over infrastructure and cost.
Want greater flexibility to bring your own libraries and frameworks to optimize training workflows for better accuracy and performance.
Amazon Titan
Open all
What are Amazon Titan models?
Exclusive to Amazon Bedrock, the Amazon Titan family of models incorporates 25 years of Amazon experience innovating with AI and machine learning across the business. Amazon Titan FMs provide customers with a breadth of high-performing image, multimodal, and text model choices through a fully managed API. Amazon Titan models are created by AWS and pretrained on large datasets, making them powerful, general-purpose models built to support a variety of use cases, while also supporting the responsible use of AI. Use them as is or privately customize them with your own data. Learn more about Amazon Titan.
Where can I learn more about the data processed to develop and train Amazon Titan FMs?
To learn more about data processed to develop and train Amazon Titan FMs, visit Amazon Titan Model Training and Privacy page.
Knowledge Bases / RAG
Open all
Which data sources can I connect to Amazon Bedrock Knowledge Bases?
You can ingest content from various sources, including the web, Amazon Simple Storage Service (Amazon S3), Confluence (preview), Salesforce (preview), and SharePoint (preview). You can also programmatically ingest streaming data or data from unsupported sources. You can also connect to your structured data sources such as Redshift datawarehouse and AWS Glue data catalog.
How does Amazon Bedrock Knowledge Base retrieve data from structured data sources?
Amazon Bedrock Knowledge Bases provides a managed Natural Language to SQL to convert natural language into actionable SQL queries and retrieve data, allowing you to build application using data from these sources.
Does Amazon Bedrock Knowledge Bases support multi-turn conversations?
Yes, session context management is built-in, allowing your applications to maintain context across multiple interactions, which is essential for supporting multi-turn conversations.
Does Amazon Bedrock Knowledge Bases provide source attribution for retrieved information?
Yes, all information retrieved includes citations, improving transparency and minimizing the risk of hallucinations in the generated responses.
What multi-modal capabilities does Amazon Bedrock Knowledge Bases offer?
Amazon Bedrock Knowledge Bases supports multi-modal data processing, allowing developers to build generative AI applications that analyze both text and visual data, including images, charts, diagrams, and tables. Model responses can leverage insights from visual elements in addition to text, providing. more accurate and contextually relevant answers. Additionally, source attribution for responses includes visual elements, enhancing transparency and trust in the responses.
What multi-modal data formats does Amazon Bedrock Knowledge Bases support?
Amazon Bedrock Knowledge Bases can process visually rich documents in PDF format, which may contain images, tables, charts, and diagrams. For image-only data, Bedrock Knowledge Bases supports standard image formats like JPEG and PNG, enabling search capabilities where users can retrieve relevant images based on text-based queries.
What are the different parsing options available in Amazon Bedrock Knowledge Bases?
Customers have three parsing options for Bedrock Knowledge Bases. For text-only processing, the built-in default Bedrock parser is available at no additional cost, ideal for cases where multimodal data processing is not required. Amazon Bedrock Data Automation (BDA) or foundation models can be used to parse multimodal data. For more information, refer to the product documentation.&nbsp;
How does Amazon Bedrock Knowledge Bases ensure data security and manage workflow complexities?
Amazon Bedrock Knowledge Base handles various workflow complexities such as content comparison, failure handling, throughput control, and encryption, ensuring that your data is securely processed and managed according to AWS’s stringent security standards.
Model evaluation
Open all
What is Model Evaluation on Amazon Bedrock?
Model Evaluation on Amazon Bedrock allows you to evaluate, compare, and select the best FM for your use case in just a few short steps. Amazon Bedrock offers a choice of automatic evaluation and human evaluation. You can use automatic evaluation with predefined metrics such as accuracy, robustness, and toxicity. You can use human evaluation workflows for subjective or custom metrics such as friendliness, style, and alignment to brand voice. For human evaluation, you can use your in-house employees or an AWS-managed team as reviewers. Model Evaluation on Amazon Bedrock provides built-in curated datasets or you can bring your own datasets.
Against what metrics can I evaluate FMs?
You can evaluate variety of predefined metrics such as accuracy, robustness, and toxicity using automatic evaluations. You can also use human evaluation workflows for subjective or custom metrics, such as friendliness, relevance, style, and alignment to brand voice.
What is the difference between human-based and automatic evaluations?
Automatic evaluations allow you to quickly narrow down the list of available FMs against standard criteria (such as accuracy, toxicity and robustness). Human-based evaluations are often used to evaluate more nuanced or subjective criteria that require human judgment and where automatic evaluations might not exist (such as brand voice, creative intent, friendliness).
How does automatic evaluation work?
You can quickly evaluate Amazon Bedrock models for metrics such as accuracy, robustness, and toxicity by using curated built-in data sets or by bringing your own prompt datasets. After your prompt datasets are sent to Amazon Bedrock models for inference, the model responses are scored with evaluation algorithms for each dimension. The backend engine aggregates individual prompt response scores into summary scores and presents them through easy-to-understand visual reports.
How does human evaluation work?
Amazon Bedrock allows you to set up human review workflows in a few short steps and bring your in-house employees, or use an expert team managed by AWS, to evaluate models. Through Amazon Bedrock’s intuitive interface, humans can review and give feedback on model responses by clicking thumbs up or down, rating on a scale of 1-5, choosing the best of multiple responses, or ranking prompts. For example, a team member can be shown how two models respond to the same prompt, and then be asked to select the model that shows more accurate, relevant, or stylistic outputs. You can specify the evaluation criteria that matter to you by customizing the instructions and buttons to appear on the evaluation UI for your team. You can also provide detailed instructions with examples and the overall goal of model evaluation, so users can align their work accordingly. This method is useful to evaluate subjective criteria that require human judgement or more nuanced subject matter expertise and that cannot be easily judged by automatic evaluations.
Guardrails
Open all
What is Amazon Bedrock Guardrails?
Amazon Bedrock Guardrails provides configurable safeguards to help safely build generative AI applications at scale. With a consistent and standard approach used across a wide range of foundation models (FMs) including FMs supported in Amazon Bedrock, fine-tuned models, and models hosted outside of Amazon Bedrock, Guardrails delivers industry-leading safety protections for your generative AI applications.
What are the safeguards available in Amazon Bedrock Guardrails?
Amazon Bedrock Guardrails offers six safeguards to help you build safe, generative AI applications. Below are the safeguards offered by Bedrock Guardrails.
Multi modal content filters – Configure thresholds to help detect and filter harmful text and/or image content across multiple categories including hate, insults, sexual, violence, misconduct, and prompt attacks.
Denied topics – Define a set of topics that are undesirable in the context of your application. The filter will help block them if detected in user queries or model responses.
Word filters – Configure filters to help block undesirable words, phrases, and profanity (exact match). Such words can include offensive terms, competitor names, etc.
Sensitive information filters – Configure filters to help block or mask sensitive information, such as personally identifiable information (PII), or custom regex in user inputs and model responses. Blocking or masking is done based on probabilistic detection of sensitive information in standard formats in entities such as SSN number, Date of Birth, address, etc. This also allows configuring regular expression-based detection of patterns for identifiers.
Contextual grounding checks– Help detect and filter hallucinations if the responses are not grounded (e.g., factually inaccurate or new information) in the source information and irrelevant to user’s query or instruction.
Automated Reasoning checks&nbsp;–&nbsp;Help detect factual inaccuracies in generated content, suggest corrections, and explain why responses are accurate by checking against a structured, mathematical representation of knowledge called an Automated Reasoning Policy.
What modalities are supported with Bedrock Guardrails?
Bedrock Guardrails supports both text and image content to enable customers to build safe generative AI applications at scale.
Can I use Guardrails with all available FMs and tools on Amazon Bedrock?
Amazon Bedrock Guardrails works with a wide range of models including FMs supported in Amazon Bedrock, fine-tuned models, as well as self-hosted models outside Amazon Bedrock. User inputs and model outputs can be evaluated independently for third-party and self-hosted models using the ApplyGuardrail API. Amazon Bedrock Guardrails can also be integrated with Amazon Bedrock Agents and Amazon Bedrock Knowledge Bases to build safe and secure generative AI applications aligned with responsible AI policies
What are the safeguard tiers in Bedrock Guardrails?
Bedrock Guardrails provides safeguard tiers for content filters and denied topics with distinct performance characteristics and expanded language support for different application requirements and use cases. There are two tiers with Bedrock Guardrails: Standard tiers that provide robust performance with comprehensive language support. This tier requires opting into cross-region inference. Classic tier offers established functionality and limited language support of 3 languages. See the user guide for more details.
What languages are supported by Amazon Bedrock Guardrails?
Languages support by Amazon Bedrock Guardrails depends on the filter and the tier used. See the user guide for details on the languages supported for each filter and tier. Any language that is not supported in either classic or standard tier will lead to ineffective results.
What are the different types of prompt attacks supported with Amazon Bedrock Guardrails?
Amazon Bedrock Guardrails detects and protects against the following types of prompt attacks.
Jailbreaks - Here, user prompts designed to bypass the native safety and moderation capabilities of foundation models in order to generate harmful or undesirable content are detected.
Prompt Injection - Here, user prompts designed to ignore and override instructions specified by the developer are detected.
Prompt leakage (standard tier only) - Here, user prompts designed to extract or reveal the system prompt, developer instructions, or other confidential configuration details are detected.
See here for details on how Guardrails protects against prompt attacks.
How does Amazon Bedrock Guardrails protect against undesirable or confidential content with code?
Amazon Bedrock Guardrails offers protection against harmful content within code elements including user prompts, code, comments, variable and function names, and string literals. Content filters (with standard tier) in Bedrock Guardrails now detect and filter such harmful content in code in the same way as text and image content protection. Additionally, Bedrock Guardrails offers enhanced protection with prompt leakage detection with standard tier, helping detect and prevent unintended disclosure of information from system prompts in model responses that could compromise intellectual property. Furthermore, denied topics (with standard tier) and sensitive information filters with Bedrock Guardrails now help safeguard against vulnerabilities using code within topics and help prevent inclusion of PII within code structures.
How can I enforce Guardrails across my organization?
Amazon Bedrock Guardrails provides the ability to implement cross-account safeguards within an organization. You can specify a Guardrail ARN that contains the required safety controls to be enforced across accounts and organization units within your Bedrock policy of your organization. Once this policy is established, all inference calls to Amazon Bedrock across accounts will automatically enforce the safety controls without explicitly calling Guardrails for each call. This organization-wide implementation enables consistent application of safety controls, reduces operational overhead, and supports the flexibility to apply account-level and application-specific guardrails for individual use case requirements. See here for details.
Does AWS offer an intellectual property indemnity covering copyright claims for its generative AI services?
AWS offers an uncapped intellectual property (IP) indemnity for copyright claims arising from generative output of the following generally available Amazon generative AI services: Amazon models, and other services listed in Section 50.10 of the Service Terms (the “Indemnified Generative AI Services”). This means that customers are protected from third-party claims alleging copyright infringement by the output generated by the Indemnified Generative AI Services in response to inputs or other data provided by the customer. Customers must also use the services responsibly, such as not inputting infringing data or disabling a service’s filtering features.
What is the pricing model for using Amazon Bedrock Guardrails?
Amazon Bedrock Guardrails is priced on a per-use model for both text and image content. Please see the Guardrails pricing page for pricing details.
Are customers able to run automated tests on the effectiveness of the Guardrails they set? Is there a “test case builder” (the journalist’s terminology) for ongoing monitoring?
Yes, Amazon Bedrock Guardrail APIs help customers run automated tests. “Test case builder” maybe something you want to use prior to deploying guardrails in production. There is no native test case builder yet. For ongoing monitoring of production traffic, guardrails help provide detailed logs of all violations for each input and output, so that customers can granularly monitor every input coming and going out of their gen AI application. These logs can be stored in Amazon CloudWatch or S3 and can be used to create custom dashboards based on customers’ requirements.
How is validation using Automated Reasoning checks different from Contextual Grounding checks?
Using an Automated Reasoning Policy, Automated Reasoning checks can point out both accurate claims and factual inaccuracies in content. For both accurate and inaccurate statements, Automated Reasoning check provides verifiable, logical explanations for its output. Automated Reasoning check requires upfront involvement from a domain expert to create a Policy and only supports content that defines rules. On the other hand, Contextual grounding checks in Bedrock Guardrails uses machine learning techniques to ensure the generated content closely follows the documents that were provided as input from a knowledge base, without requiring any additional upfront work. Both Automated Reasoning Checks and Contextual Grounding provide their feedback in the Guardrail API output. You can use feedback to update the generated content.
What image formats are supported for multimodal content?
PNG and JPEG image formats are supported with Bedrock Guardrails.
How are you able to deliver 99% correctness of model responses using Automated Reasoning checks in Bedrock Guardrails?
We use Automated Reasoning&nbsp;formal verification techniques alongside LLMs to identify up to 99% of the valid statements. Automated Reasoning checks' feedback on content points out ambiguity and suggests corrections for wrong or incomplete answers. The feedback makes it easy to rewrite answers until they are judged valid.
Marketplace
Open all
What is Amazon Bedrock Marketplace?
Amazon Bedrock Marketplace offers customers over 100 popular, emerging, or specialized models, in addition to the serverless FMs of Amazon Bedrock so customers can easily build and optimize their generative AI applications. Within the Amazon Bedrock console, customers will be able to discover a broad catalog of FMs offered by various providers. You can then deploy these models onto fully managed endpoints, where you can choose your desired number of instances and instance types. Once the models are deployed, the models can be accessed through Amazon Bedrock’s Invoke API. For chat-tuned, text-to-text models, customers can use our new Converse API, a unified API that abstracts FM differences and enables model switching with a single parameter change. Where applicable, the models can be used with Amazon Bedrock Playground, Agents, Knowledge Bases, Prompt Management, Prompt Flows, Guardrails, and Model Evaluation.
Why should I use Amazon Bedrock Marketplace?
You should use Amazon Bedrock Marketplace to benefit from the powerful models which are emerging rapidly as the generative AI industry continues to innovate. You can quickly access and deploy popular, emerging, and specialized models tailored to you unique requirements, which can accelerate the time-to-market, improve the accuracy, or reduce the cost of your generative AI workflows. You can access the models through Bedrock’s unified APIs and, if they are compatible with Bedrock’s Converse API, use them natively with Bedrock tools such as Agents, Knowledge Bases, and Guardrails. You can easily connect Amazon Bedrock Marketplace to Amazon Bedrock’s serverless models, all from a single place.
&nbsp;
How do I get started with Amazon Bedrock Marketplace?
Simply navigate to the Amazon Bedrock Model Catalog page in the Bedrock console where you can search for Amazon Bedrock Marketplace model listings along with the serverless Amazon Bedrock models. After you have selected the Amazon Bedrock Marketplace model you want to use, you can subscribe to the model through the Model Detail page, accepting the EULA and price(s) set by the provider. Once the subscription is complete, which typically takes a few minutes, you can deploy the model to a fully managed SageMaker endpoint by clicking on Deploy in the Model Detail page or by using APIs. In the deployment step, you can select your desired number of instances and instance types to meet your workload. Once the endpoint is setup, which typically takes 10 – 15 minutes, you can start making inference calls to the endpoint and use the model in Bedrock’s advanced tools, provided the model is compatible with Bedrock’s Converse API.
Can I fine-tune Amazon Bedrock Marketplace models?
Models with architectures supported by Custom Model Import (Mistral, Mixtral, Flan, and Llama2/3/3.1/3.2) can be fine-tuned in SageMaker and made available in Amazon Bedrock via Custom Model Import. Models which are not supported by Custom Model Import can still be fine-tuned in SageMaker. However, the fine-tuned version of these models can not be used in Amazon Bedrock.
Data Automation
Open all
What is Bedrock Data Automation?
What is Bedrock Data Automation? Amazon Bedrock Data Automation is a GenAI-powered capability of Bedrock that streamlines the development of generative AI applications and automates workflows involving documents, images, audio, and videos. By leveraging Bedrock Data Automation, developers can reduce development time and effort, making it easier to build intelligent document processing, media analysis, and other multimodal data-centric automation solutions. Bedrock Data Automation offers industry-leading accuracy at lower cost than alternative solutions, along with features such as visual grounding with confidence scores for explainability and built-in hallucination mitigation. This ensures trustworthy and accurate insights from unstructured, multi-modal data sources. Customers can easily customize Bedrock Data Automation output to generate specific insights in consistent formats required by their systems and applications. Developers get started with Bedrock Data Automation on the Amazon Bedrock console, where they can configure and customize output using their sample data. They can then integrate Bedrock Data Automation’s unified multi-modal inference API into their applications to process their unstructured content at production scale with high accuracy and consistency. Bedrock Data Automation is also integrated with Bedrock Knowledge Bases, making it easier for developers to generate meaningful information from their unstructured multi-modal content to provide more relevant responses for retrieval augmented generation (RAG).
Why should I use Bedrock Data Automation?
Bedrock Data Automation&nbsp;makes it easy to transform unstructured enterprise data into application-specific output formats that can be utilized by gen AI applications and ETL workflows. Customers no longer need to spend time and effort managing and orchestrating multiple models, engineering prompts, implementing safety guardrails, or stitching together outputs to align to downstream system requirements. Bedrock Data Automation delivers highly accurate, consistent, and cost-effective processing of unstructured data.&nbsp;Bedrock Data Automation is built with responsible AI in mind, providing customers with key features such as visual grounding and confidence scores, that make it easy to integrate Bedrock Data Automation within enterprise workflows.
What does Amazon Bedrock Data Automation manage on my behalf?
Bedrock Data Automation&nbsp;capabilities are available via a fully managed API that customers can easily integrate into their applications. Customers do not need to worry about scaling underlying compute resources, selecting and orchestrating models, or managing prompts for FMs.
What is a blueprint?
A blueprint is a feature that customers use to specify their output requirements using natural language or a schema editor. It includes a list of fields that they desire to extract, a data format for each field, and natural language instructions for each field. For example, developers can type, “Create a blueprint for invoices with the following fields: tax, dueDate, ReceiptDate” or “Confirm the invoice total matches the sum of line items.” They reference blueprints as part of the inference API calls so that the system returns information in the format described in the blueprint.
What features and file formats are supported per modality by Amazon Bedrock Data Automation
Documents
Bedrock Data Automation supports both standard output and custom output for documents.
Standard output will provide extraction of text from documents and generative output such as document summary and captions for tables/figures/diagrams. Output is returned in reading order and can optionally be grouped by layout element, which will include headers/footers/titles/tables/figures/diagrams. Standard output will be used for BDA integration with Bedrock Knowledge Bases.
Custom Output leverages blueprints, which specify output requirements using natural language or a schema editor. Blueprints include a list of fields to extract and a data format for each field.
Bedrock Data Automation supports PDF, PNG, JPG, TIFF, a max of 1500 pages, and a max file size of 500MB per API request. By default, BDA will support 50 concurrent jobs and 10 transactions per second per customer.
Images
Bedrock Data Automation supports both standard output and custom output for images.
Standard output will provide summarization, detected explicit content, detected text, logo detection and Ad taxonomy: IAB for images. Standard output will be used for BDA integration with Bedrock Knowledge Bases.
Custom Output leverages blueprints, which specify output requirements using natural language or a schema editor. Blueprints include a list of fields to extract and a data format for each field.
Bedrock Data Automation supports JPG, PNG, a max resolution of 4K, and a max file size of 5 MB per API request. By default, BDA supports a max concurrency of 20 images at 10 transactions per second (TPS) per customer.
Videos
Bedrock Data Automation supports both standard output for videos.
Standard output will provide full video summary, chapter segmentation, chapter summary, full audio transcription, speaker identification, detected explicit content, detected text, logo detection and Interactive Advertising Bureau (IAB) taxonomy for videos. Full video summary is optimized for content with descriptive dialogue such as product overviews, trainings, news casts, and documentaries.
Bedrock Data Automation supports MOV and MKV with H.264, VP8, VP9, a max video duration of 4 hours, and a max file size of 2 GB per API request. By default, BDA supports a max concurrency of 20 videos at 10 transactions per second (TPS) per customer.
Audio
Bedrock Data Automation supports both standard output for audio.
Standard output will provide summarization including chapter summarization, full transcription, and detect explicit content moderation for audio files.
Bedrock Data Automation supports FLAC, M4A, MP3, MP4, Ogg, WebM, WAV, a max audio duration of 4 hours, and a max file size of 2 GB per API request.
In which AWS regions is Amazon Bedrock Data Automation available?
Amazon Bedrock Data Automation is generally available in&nbsp;7 AWS Regions, including US West (Oregon), US East (N. Virginia) Regions, Europe (Frankfurt), Europe (London), Europe (Ireland), Asia Pacific (Mumbai) and Asia Pacific (Sydney).
What languages does Amazon Bedrock Data Automation support?
Amazon Bedrock Data Automation currently supports English. Additional language support is coming soon in 2025.
Amazon Bedrock in SageMaker Unified Studio
Open all
What is Amazon Bedrock in SageMaker Unified Studio?
Amazon Bedrock can be accessed through the AWS Management Console, APIs, or Amazon SageMaker Unified Studio. Within Amazon SageMaker Unified Studio, users can quickly build and iterate on generative AI applications using high-performing foundation models (FMs). Through an intuitive interface, you can experiment with models, collaborate on projects, and get streamlined access to various Bedrock tools and resources to build generative AI applications quickly.
How do I access Amazon Bedrock's capabilities in Amazon SageMaker Unified Studio?
To access Amazon Bedrock's capabilities within Amazon SageMaker Unified Studio, developers and their admins will need to follow these steps:
Create a new domain in Amazon SageMaker Unified Studio.
Enable the Gen AI application development project profile.
Access Amazon Bedrock through the Generative AI Playground (Discover) and Generative AI App Development (Build) sections, using their company's single sign-on (SSO) credentials within Amazon SageMaker Unified Studio.
What are the key features and capabilities of Amazon Bedrock in Amazon SageMaker Unified Studio? How is it different from Amazon Bedrock Studio and Amazon Bedrock IDE?
While Amazon Bedrock can be accessed through the AWS Management Console, APIs, or Amazon SageMaker Unified Studio, its capabilities within SageMaker Unified Studio build upon the original Amazon Bedrock Studio (that is no longer available) with several key improvements. When accessed through Amazon SageMaker Unified Studio, it provides access to advanced AI models from leading companies, tools for creating and testing AI prompts, and seamless integration with Amazon Bedrock Knowledge Bases, Amazon Bedrock Guardrails, Amazon Bedrock Flows, and Amazon Bedrock Agents. Teams can collaborate in a shared workspace to build custom AI applications tailored to their needs.
New features include a model hub for side-by-side AI model comparison, an expanded playground supporting chat, image, and video interactions, and improved Knowledge Base creation with web crawling. It introduces Agent creation for more complex chat applications and simplifies sharing of AI apps and prompts within organizations. It also offers access to underlying application code and the ability to export chat apps as CloudFormation templates. By managing AWS infrastructure details, it enables users of various skill levels to create AI applications more efficiently, making it a more versatile and powerful tool than its predecessor.
Amazon Bedrock IDE was renamed to better represent the core capability of Amazon Bedrock being accessed through Amazon SageMaker Unified Studio's governed environment.
How does Amazon Bedrock in SageMaker Unified Studio enable collaboration among teams within an organization?
When accessing Amazon Bedrock’s interface through Amazon SageMaker Unified Studio, teams benefit from a governed environment that enables collaboration. Teams can create projects, invite colleagues, and collaboratively build generative AI applications together. They can receive quick feedback on their prototypes and share the applications with anyone in SageMaker Unified Studio or with specific users in the domain. Robust access controls and governance features allow only authorized members to access project resources such as data or the generative AI applications, supporting data privacy and compliance, and thus fostering secure cross-functional collaboration and sharing. In addition, generative AI applications can be shared from a builder to specific users in the SageMaker Unified Studio domain, or with specific individuals, allowing for proper access rights, controls, and governance of such assets.
Why is Amazon Bedrock being integrated into Amazon SageMaker Unified Studio?
While Amazon Bedrock can be accessed through the AWS Management Console, APIs, or Amazon SageMaker Unified Studio, this integration eliminates barriers between data, tools, and developers in the generative AI development process. Teams gain a unified development experience by accessing familiar JupyterLab environments and analytics tools while seamlessly incorporating Amazon Bedrock's powerful generative AI capabilities—all within the same workspace.
The unified environment allows seamless collaboration among developers of various skill levels throughout the development lifecycle - from data preparation to model development and generative AI application building. Teams can access integrated tools for knowledge base creation, guardrail configuration, and high-performing generative AI application development, all within a secure and governed framework.
Within Amazon SageMaker Unified Studio, developers can effortlessly switch between different tools based on their needs, combining analytics, machine learning, and generative AI capabilities in a single workspace. This consolidated approach reduces development complexity and accelerates time-to-value for generative AI projects. By bringing Amazon Bedrock into Amazon SageMaker Unified Studio, AWS lowers the barriers to entry for generative AI development while maintaining enterprise-grade security and governance, ultimately enabling organizations to innovate faster and more effectively with generative AI.
When should I use Amazon Bedrock's capabilities in Amazon SageMaker Unified Studio?
Amazon Bedrock's capabilities in Amazon SageMaker Unified Studio are ideal for enterprise teams who need a governed environment for collaboratively building and deploying generative AI applications. Through Amazon SageMaker Unified Studio, teams can access:
&nbsp;
The Generative AI Playground in the Discover section enables teams to experiment with foundation models (FMs), test different models and configurations, compare model outputs, and collaborate on prompts and applications. This environment provides a seamless way for teams to evaluate and understand the capabilities of different models before implementing them in their applications.
&nbsp;
The Generative AI App Development in the Build section provides teams with the tools needed to create production-ready generative AI applications. Teams can create and manage Knowledge Bases, implement Guardrails for responsible AI, develop Agents and Flows, and collaborate securely while maintaining governance and compliance controls. This environment is particularly valuable for organizations that require secure collaboration and seamless access to Amazon Bedrock's full range of capabilities while maintaining enterprise security and compliance standards.
How does Amazon Bedrock integrate with other AWS services within Amazon SageMaker Unified Studio to create generative AI applications?
Amazon Bedrock's capabilities are now generally available within Amazon SageMaker Unified Studio, offering a governed collaborative environment that empowers developers to rapidly create and customize generative AI applications. This intuitive interface caters to developers of all skill levels, providing seamless access to Amazon Bedrock's high-performance foundation models (FMs) and advanced customization tools for collaborative development of tailored generative AI applications.
Within Amazon SageMaker Unified Studio, Amazon Bedrock seamlessly integrates with Amazon SageMaker's analytics, machine learning (ML), and generative AI capabilities. Organizations can move from concept to production faster by prototyping and experimenting with foundation models in Amazon Bedrock, then easily transitioning to JupyterLab notebooks or code editors to integrate these resources into broader applications and workflows. This consolidated workspace streamlines complexity, enabling faster prototyping, iteration, and deployment of production-ready, responsible generative AI applications that align with specific business requirements.
Are there any limits or quotas on the usage of Amazon Bedrock in SageMaker Unified Studio?
Amazon Bedrock in SageMaker Unified Studio is bound by the account limits and quotas defined for the platform and the underlying Amazon Bedrock resources, such as foundation models (FMs), Knowledge Bases, Agents, Flows, and Guardrails.
What are the pricing and billing models for using Amazon Bedrock in SageMaker Unified Studio?
Access to Amazon Bedrock through SageMaker Unified Studio comes at no extra cost, and users only pay for the usage of the underlying resources that are required by the generative AI applications that they build. For example, customers will only pay for the associated model, Guardrail and Knowledge Base that they have used on their generative AI application. For more information, please visit the Amazon Bedrock pricing page.
What are the Service Level Agreements (SLAs) for Amazon Bedrock in SageMaker Unified Studio?
Amazon Bedrock within SageMaker Unified Studio is bound by the same SLAs as Amazon Bedrock. For more information, visit the Amazon Bedrock Service Level Agreement page.
What documentation and support resources are available for Amazon Bedrock in SageMaker Unified Studio?
To facilitate a smooth onboarding experience with Amazon Bedrock in SageMaker Unified Studio, you can find detailed documentation in the User Guide. If you have any additional questions or need further assistance, please don't hesitate to reach out to your AWS account team.
How to get started
Tutorial
Explore common generative AI use cases with Amazon Bedrock Workshop
Gain hands-on experience
Video
Get started with a step-by-step tutorial
Watch the video
Did you find what you were looking for today?
Let us know so we can improve the quality of the content on our pages
Yes
No
Create an AWS account
Learn
What Is AWS?
What Is Cloud Computing?
What Is Agentic AI?
Cloud Computing Concepts Hub
AWS Cloud Security
What's New
Blogs
Press Releases
Resources
Getting Started
Training
AWS Trust Center
AWS Solutions Library
Architecture Center
Product and Technical FAQs
Analyst Reports
AWS Partners
Developers
Builder Center
SDKs &amp; Tools
.NET on AWS
Python on AWS
Java on AWS
PHP on AWS
JavaScript on AWS
Help
Contact Us
File a Support Ticket
AWS re:Post
Knowledge Center
AWS Support Overview
Get Expert Help
AWS Accessibility
Legal
Event Code of Conduct
Event Terms &amp; Conditions
English
Back to top
Amazon is an equal opportunity employer and does not discriminate on the basis of protected veteran status, disability or other legally protected status.
x
facebook
linkedin
instagram
twitch
youtube
podcasts
email
Privacy
Site terms
Cookie Preferences
© 2026, Amazon Web Services, Inc. or its affiliates. All rights reserved.