# Amazon SageMaker FAQs (Clean)

The center for all your data, analytics, and AI – Amazon SageMaker FAQs – AWS
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
Amazon SageMaker
Overview
Capabilities
Pricing
FAQs
Analytics
Amazon SageMaker
FAQs
Amazon SageMaker FAQs
General
9
Product experience
11
Pricing
2
Availability
2
General
Open all
What is the next generation of Amazon SageMaker?
The next generation of SageMaker is a unified platform for data, analytics, and AI. Bringing together widely adopted AWS machine learning (ML) and analytics capabilities, the next generation of SageMaker delivers an integrated experience for analytics and AI with unified access to all your data. SageMaker allows you to collaborate and build faster from a unified studio using familiar AWS services for model development, generative AI, data processing, and SQL analytics, accelerated by Amazon Q Developer, the most capable generative AI assistant for software development. Additionally, you can access all your data whether it’s stored in data lakes, data warehouses, or third-party or federated data sources, with governance built in to address enterprise security needs.
How is the new SageMaker different from what I am using today for my ML workflows?
We expanded the widely adopted SageMaker service with the comprehensive set of AWS data, analytics, and AI capabilities to deliver a unified experience of data, analytics, and AI. Going forward, the existing set of AI/ML capabilities in SageMaker for data wrangling, building, training, and deploying AI models will be referred to as Amazon SageMaker AI. SageMaker AI is integrated within the next generation of SageMaker and is also available as a standalone service for those who wish to focus speciﬁcally on building, training, and deploying AI and ML models at scale.
The next generation SageMaker includes:
Amazon SageMaker Unified Studio: Build in a single development environment to access and use familiar tools and functionality from purpose-built AWS analytics and AI/ML services like Amazon EMR, AWS Glue, Amazon Athena, Amazon Redshift, Amazon Bedrock, and SageMaker AI.
Amazon SageMaker Data and AI Governance: Securely discover, govern, and collaborate on data and AI with Amazon SageMaker Catalog, built on Amazon DataZone.
Amazon SageMaker is built on an open lakehouse architecture, fully compatible with Apache Iceberg. It unifies all your data across Amazon S3 data lakes, Amazon Redshift data warehouses, third-party and federated data sources.
What capabilities are included with the next generation of SageMaker?
The next generation of SageMaker includes the following capabilities:
SageMaker Unified Studio: Build with all your data and tools for analytics and AI in a single environment.
SageMaker Data and AI Governance: Securely discover, govern, and collaborate on data and AI with SageMaker Catalog, built on Amazon DataZone.
Model development: Build, train, and deploy ML and foundation models (FMs) with fully managed infrastructure, tools, and workflows with SageMaker AI (formerly SageMaker).
Generative AI app development: Build and scale generative AI applications with Amazon Bedrock.
SQL analytics: Gain insights with Amazon Redshift, the most price-performant SQL engine.
Data processing: Analyze, prepare, and integrate data for analytics and AI using open source frameworks on Athena, Amazon EMR, and AWS Glue.
Amazon SageMaker is built on an open lakehouse architecture, fully compatible with Apache Iceberg. It unifies all your data across Amazon S3 data lakes, Amazon Redshift data warehouses, third-party and federated data sources.
Why should I use the next generation of SageMaker?
Bringing together widely adopted AWS ML and analytics capabilities, the next generation of SageMaker delivers an integrated experience for analytics and AI with unified access to all your data. This unified approach helps you work more efficiently with your data, increase collaboration across teams, and enhance overall productivity.
SageMaker allows you to:
Collaborate and build faster with a single data and AI development environment, using familiar AWS services for model development, generative AI, data processing, and SQL analytics.
Develop and scale your AI use cases with a broad set of tools to train, customize, and deploy ML and FMs, and rapidly create generative AI applications tailored to your business.
Reduce data silos with an open lakehouse to unify all your data across Amazon S3 data lakes, Amazon Redshift data warehouses, and third-party or federated data sources.
Meet your enterprise security needs with built-in data and AI governance to control access to the right data, ML models, generative AI development artifacts, and compute resources, by the right user for the right purpose.
Can I use individual AWS services without using SageMaker?
Yes. You can continue to independently use individual AWS services such as SageMaker AI (formerly SageMaker), Amazon EMR for big data processing, AWS Glue, and Amazon Redshift for data warehousing based on your specific business requirements. There is no impact to how you currently use your individual services today.
SageMaker offers an additional benefit by providing a unified, user-friendly interface that enables access to these services. This approach helps you more effectively innovate with your data, increase collaboration across teams, and enhance overall productivity.
What existing AWS services can I use within SageMaker?
SageMaker brings together a comprehensive set of AWS AI and analytics services across SageMaker Unified Studio, SageMaker Data and AI Governance, and an open lakehouse architecture.
From SageMaker Unified Studio, you can access capabilities for data processing, SQL analytics, ML, and generative AI application development using existing AWS services. For data processing, services like Athena, AWS Glue, Amazon EMR, and Amazon Managed Workflows for Apache Airflow (Amazon MWAA) analyze, prepare, integrate and orchestrate data for analytics and AI at any scale. For SQL Analytics, Amazon Redshift and Athena provide powerful SQL analytic capabilities on your unified data across the lakehouse. ML capabilities are delivered by SageMaker AI (previously known as SageMaker) for building, training, and deploying ML and FMs. Additionally, you can develop generative AI applications using Amazon Bedrock.
SageMaker Data and AI Governance provides end-to-end, built-in governance through a unified data management experience in SageMaker Catalog, built on Amazon DataZone, to securely discover, govern, and collaborate on data and AI.
The SageMaker lakehouse architecture is built on multiple catalog services across AWS Glue Data Catalog, AWS Lake Formation, and Amazon Redshift to provide unified data access across Amazon S3 data lakes, Amazon Redshift data warehouses, and third-party and federated data sources.
In addition, these services remain available as standalone capabilities through the AWS Management Console, giving you flexibility based on your use cases. We will enhance SageMaker with more services in 2025 to unify experiences across analytics and AI. These include search analytics with Amazon OpenSearch Service, business intelligence with Amazon QuickSight, and streaming with the AWS streaming portfolio of services.
How do I get started with SageMaker?
Getting started with SageMaker is easy. If you have&nbsp; existing data in Amazon Athena, Amazon Redshift, or Amazon S3 Tables, click "Query using SageMaker Unified&nbsp; Studio" from those service consoles or "Get Started" from the&nbsp; SageMaker console. Simply specify an AWS Identity and Access Manamgement (IAM) role, and SageMaker&nbsp; automatically creates an IAM-based domain and project in Unified Studio with all your existing data&nbsp; permissions from AWS Glue Data Catalog, AWS Lake Formation and Amazon S3,&nbsp; along with a pre-configured notebook and serverless compute. A domain is the organizing entity for connecting together your assets, users, and their projects for your business unit.&nbsp;A project in SageMaker helps you organize your work and provides business context over the jobs you are performing.&nbsp;
Alternatively, you can start by creating an AWS IAM Identity Center (IdC)-based domain&nbsp; in the SageMaker console. In the&nbsp; console, choose Domains and Create domain, and&nbsp; you will be presented with two options: Quick setup and Manual setup. Choose&nbsp; Quick setup to get started with a set of default configurations that can be&nbsp; customized later or choose Manual setup for full control over your settings.&nbsp; Once your domain is created, you can navigate to SageMaker Unified Studio (a&nbsp; browser-based web application) where you can use all your data and configured&nbsp; tools for analytics and AI. To learn more about how to get started, visit the SageMaker documentation.
I currently use existing AWS services that are now included in SageMaker. How do I upgrade to the unified experience in SageMaker?
Your existing data development experiences in AWS services like Amazon EMR, AWS Glue, and Athena remain available. This means all existing code and resources you've created can continue to be used without disruption. We will provide easy-to-use upgrade scripts and comprehensive guidelines to bring your existing code base to the unified SageMaker experience in Q1 2025.
For which compliance programs is the next generation of Amazon SageMaker in scope?
Amazon SageMaker Unified Studio and SageMaker Catalog are built on Amazon DataZone (using the same back-end entity store/database, identity and access mechanisms, and APIs) and are therefore included in the scope of all of the same compliance programs as Amazon DataZone. Please refer to the list of Services in Scope by Compliance Program to view the programs for which Amazon DataZone is in scope. This includes SOC, certain ISO certifications, PCI DSS, and HITRUST CSF. Amazon Datazone is also included in the list of HIPAA eligible services.
Product experience
Open all
What is a project in SageMaker?
A project in SageMaker helps users organize their&nbsp; work and provide business context over the jobs they are performing. It&nbsp; provides a workspace where users can collaborate on data and artifacts such&nbsp; as ML models, notebooks, queries, and pipelines. Projects are secured so that&nbsp; only members who are explicitly added to the project are able to access the&nbsp; data and tools within it. When you use one-click onboarding from Amazon&nbsp; Athena, Amazon Redshift, Amazon S3 Tables, or the SageMaker console, a project&nbsp; is automatically created with all your existing data permissions to AWS Glue&nbsp; Data Catalog, AWS Lake Formation, and Amazon S3. When you use IdC-based domains, projects create new AWS Identity and Access Management (IAM) roles&nbsp; based on the project-selected capabilities (for example, a data lake) that&nbsp; provide users with required access to do their job. To learn more about&nbsp; projects visit the SageMaker documentation.
How does Amazon Q Developer enhance productivity in SageMaker?
Amazon Q Developer is a generative AI conversational assistant integrated into the SageMaker experience that enhances your productivity throughout the development lifecycle. Through chat or in the command line, you can use natural language to ask questions about SageMaker, get help with code, and explore resources such as datasets. When you chat with Amazon Q Developer, it uses the context of your current conversation to provide personalized guidance and automated assistance throughout the SageMaker development experience. Amazon Q Developer can help you with code discussions, provide inline code completions, generate SQL queries, find and integrate datasets, and offer intelligent support tailored to your specific development needs.&nbsp;
By understanding the nuances of your work, Amazon Q Developer delivers targeted, context-aware assistance that streamlines your development process and enhances overall productivity in the SageMaker environment.
What tools are available in SageMaker for analytics and AI jobs?
SageMaker provides a unified, web-based environment that&nbsp; brings together powerful tools for complete data and AI workflows. Built-in&nbsp; IDEs enable AI/ML development, allowing you to process large data volumes&nbsp; from various sources using frameworks and services like PySpark, AWS Glue,&nbsp; and Amazon EMR.
For version control and workflow management, you can commit to Git and define&nbsp; workflows using Amazon MWAA. An immersive and serverless notebook lets you&nbsp; explore, analyze, and visualize data, perform complex data processing using&nbsp; Python, and use natural language prompts to interact with your data, and&nbsp; automatically scales to meet your workload demands.
Model development is streamlined through familiar SageMaker AI tools,&nbsp; including JumpStart, HyperPod, MLFlow, Pipelines, and Model Registry.&nbsp; Throughout these processes, Amazon Q Developer is seamlessly integrated&nbsp; across SageMaker tools, providing intelligent assistance in data discovery,&nbsp; preparation, pipeline creation, model building and training, and code&nbsp; deployment.
How do I build generative AI applications in SageMaker?
The Amazon Bedrock IDE, integrated within SageMaker Unified Studio, provides a comprehensive environment for developing generative AI applications. This intuitive interface helps you accelerate application development in a trusted and secure setting, offering access to the high-performing FMs and advanced customization capabilities of Amazon Bedrock.
You can use powerful features such as Amazon Bedrock Knowledge Bases, Guardrails, Agents, and Prompt Flows, allowing your team to rapidly tailor generative AI applications to your specific business needs while adhering to your responsible AI guidelines. SageMaker supports your governed access and enables secure cross-functional collaboration through access-controlled sharing and git-backed auditability.
What types of data sources does SageMaker support?
The lakehouse architecture of SageMaker unifies data across AWS data lakes, data warehouses, third-party applications, and operational databases. It gives you fast, streamlined access to your data in one place through zero-ETL integrations, federated query sources, and 240+ connectors.
How do I ensure that the data in SageMaker is properly governed and secured?
SageMaker provides end-to-end, built-in governance through a unified data management experience in SageMaker Catalog, built on Amazon DataZone. This approach enables you to catalog, discover, access, analyze, and govern both structured and unstructured data assets, ML models, and applications across your organization. SageMaker ensures that the right people have the appropriate access to the right assets, maintaining robust security and compliance standards.
How do I create and manage data pipelines in SageMaker?
You can create and manage data pipelines in SageMaker in multiple ways. Amazon SageMaker Data Processing brings together&nbsp;Amazon EMR, Athena, AWS Glue, and Amazon MWAA to help you integrate, prepare, and explore your data in a unified experience. You can build pipelines for ML-specific model orchestration with SageMaker AI and data pipelines and workflows with Amazon MWAA. You can also use zero-ETL integrations, which simplify data movement by removing complex extract, transform, and load (ETL) processes and enabling direct data replication across services. Visit What is zero-ETL? to learn more.
How do I bring my data to SageMaker?
If you're using one-click onboarding, simply click "Get&nbsp; Started" from the SageMaker, Amazon Athena, Amazon Redshift, or Amazon&nbsp; S3 Tables console, select an AWS IAM role, and SageMaker Unified Studio&nbsp; automatically creates an IAM-based domain and project with all your existing data permissions from&nbsp; AWS Glue Data Catalog, AWS Lake Formation, and Amazon S3. If you're using IdC-based domains, you can enable automated lakehouse onboarding when&nbsp; creating or updating your domain, which automatically ingests metadata for&nbsp; your datasets (such as AWS Glue Data Catalog tables) into SageMaker Catalog,&nbsp; making them immediately discoverable and ready for governance, analysis, and&nbsp; collaboration without manual configuration.
How do I get started with Amazon SageMaker notebooks?
To get started with notebooks in Amazon SageMaker, simply open Amazon SageMaker Unified Studio via the "Get Started" button on the&nbsp; SageMaker console or from Amazon S3, Amazon Athena, or Amazon Redshift consoles. Once you are logged in, select “Notebooks” from the&nbsp; left navigation in Unified Studio. The notebook is pre-integrated with your&nbsp; data catalog so you will automatically have access to the datasets that you&nbsp; have permissions to use (via IAM permissions in AWS Glue Data Catalog) so you can&nbsp; begin to write queries and analyze your data right away.
What can I do in Amazon SageMaker notebooks?
Whether you need to run a one-line SQL query, set up batch&nbsp; processing over petabytes of data in Amazon S3 using Amazon Athena for Apache Spark, create and share data&nbsp; visualizations, or create machine learning models, Amazon SageMaker notebooks&nbsp; give you one place to work with your data using SQL, Python, or natural&nbsp; language.&nbsp;They are serverless and eliminates the need to tune or pre-provision&nbsp; query processing infrastructure. You can combine Python code and SQL across&nbsp; cells within a notebook or rely on natural language to generate either Python&nbsp; or SQL to accelerate analysis since you no longer need different tools based&nbsp; on the language you want to use to work with your data.&nbsp;
What can I do with the AI agent in SageMaker notebooks?
Amazon SageMaker Data Agent, available in SageMaker notebooks, helps you interact with your data&nbsp; through natural language prompts. You can start with data discovery,&nbsp; identifying tables across your databases and finding relevant datasets. Once&nbsp; you identify the tables you need, you can request specific analysis, and the&nbsp; agent creates step-by-step plans with code for data transformations using&nbsp; Spark SQL and Python code for visualizations. For machine learning workflows,&nbsp; you can build classification or regression models and receive structured&nbsp; responses including feature engineering code, model training code using&nbsp; SageMaker AI capabilities, and evaluation metrics. The agent works best with&nbsp; specific requests about your data and desired outcomes and is optimized for&nbsp; AWS data processing services including Athena Spark and SageMaker AI.
Pricing
Open all
How does SageMaker pricing work?
When using SageMaker, you will be charged as per the&nbsp; pricing model for the various AWS services accessible through SageMaker.&nbsp; Visit SageMaker pricing&nbsp; for more information.
Can I try SageMaker for free?
The SageMaker Free Tier helps you quickly get started innovating with data and AI at no cost. Refer to SageMaker pricing for details.
Availability
Open all
In which AWS Regions is SageMaker available?
The next generation of SageMaker is available in the US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), and South America (Sao Paulo) AWS Regions. For future updates, see the AWS Regional Services List.
Does SageMaker offer an SLA?
Yes. SageMaker is engineered to provide the consistent performance and uptime that mission-critical analytics and AI workloads demand. As a unified platform comprised of multiple service components, the service availability is tied to the service component used.
For detailed information on the service level agreements (SLAs) for each individual service, refer to its respective SLA documentation. SLAs will provide you with the specific uptime guarantees and reliability commitments for the various services that make up the SageMaker experience.
Available SLA documentation include:
SageMaker AI SLA
Amazon Bedrock SLA
Amazon Redshift SLA
Amazon EMR SLA
Athena SLA
AWS Glue SLA
Amazon DataZone SLA
Lake Formation SLA
Amazon S3 SLA
Next steps
Console
Get started with SageMaker
Sign in
Documentation
Read the documentation
Learn more
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