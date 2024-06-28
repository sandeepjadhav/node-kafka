# Learning kafka with nodejs

#### Installing KAFKA on Windows and Ubuntu

### Installing KAFKA on Windows

### Step 1: Install Java

Kafka requires Java to run. Ensure you have Java installed on your system.
1. Download Java Development Kit (JDK) from the [official website.](https://www.oracle.com/java/technologies/javase-downloads.html)
2. Install the JDK and set the JAVA_HOME environment variable.

### Step 2: Download and Install Kafka
1. Download the latest Kafka binary from the [Apache Kafka website.](https://kafka.apache.org/downloads)
2. Extract the downloaded file to a suitable location (e.g., C:\kafka).

### Step 3: Configure Kafka
1. Navigate to the Kafka config directory (e.g., C:\kafka\config).
2. Open server.properties and ensure the following settings (default settings should be fine for a simple setup):
  ```
  broker.id=0
  log.dirs=/tmp/kafka-logs
  zookeeper.connect=localhost:2181 
  ```
### Step 4: Start Zookeeper and Kafka Server
1. Open a command prompt and navigate to the Kafka directory.
2. Start Zookeeper:
``` 
.\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties
```

3. Open another command prompt and start Kafka:
``` 
.\bin\windows\kafka-server-start.bat .\config\server.properties
```
### Step 5: Create a Kafka Topic
1. Open a new command prompt and navigate to the Kafka directory.
2. Create a topic named test-topic
```
.\bin\windows\kafka-topics.bat --create --topic test-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1
```
=================================================================================

### Installing KAFKA on Ubuntu

### Step 1: Install Java (Kafka Dependency)
1. Kafka requires Java to run. First, update your package repository and install Java.

```
sudo apt update
sudo apt install default-jdk -y
```
### Step 2: Install Apache Kafka
1. Download and extract Kafka binaries.

```
wget https://downloads.apache.org/kafka/3.7.0/kafka-3.7.0-src.tgz
tar -xzf kafka-3.7.0-src.tgz
cd kafka-3.7.0-src
```
### Step 3: Start Kafka and Zookeeper
1. Kafka uses Zookeeper for managing cluster metadata. First, start Zookeeper, then start Kafka.
```
[//]: # Start Zookeeper
bin/zookeeper-server-start.sh config/zookeeper.properties

[//]: # Open a new terminal and start Kafka
bin/kafka-server-start.sh config/server.properties
```
### Step 4: Install Node.js and Kafka Node Module
```
sudo apt install nodejs npm -y
```

# Start the app
1. clone the repo: https://github.com/sandeepjadhav/node-kafka.git
2. cd node-kafka
3. npm install
4. npm start
4. Use Postman/Insomenia or any other API testing api with below payload
```
curl --location 'http://localhost:3000/send' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user_id": "583c3ac3f38e84297c002546",
    "email": "test@test.com",
    "name": "test@test.com",
    "given_name": "Hello",
    "family_name": "Test",
    "nickname": "test",
    "last_ip": "94.121.163.63",
    "logins_count": 15,
    "created_at": "2016-11-28T14:10:11.338Z",
    "updated_at": "2016-12-02T01:17:29.310Z",
    "last_login": "2016-12-02T01:17:29.310Z",
    "email_verified": true
}'
```