#include <ArduinoJson.h>

DynamicJsonDocument jsonDoc(1024);
bool Status_Recieve() {
  uint8_t timer = 0;
  while (Serial2.available() > 0 || timer < 4) {
    Serial2.setTimeout(1000);
    //Serial.println(timer);
    DeserializationError err = deserializeJson(jsonDoc, Serial2);
    if (!jsonDoc["Status"].isNull()) {
      if (jsonDoc["Status"].as<String>() == "Failed" ) {
        return 0;
      }
      if (jsonDoc["Status"].as<String>() == "Complete" ) {
        return 1;
      }
      //Serial.println(jsonDoc["Status"].as<String>());
      break;
    }
    delay(1);
    timer ++;
  }
  return 0;
}


bool line_setup(String SSID,String PASS,String Token){
  jsonDoc["Type"] = "Line_Setup";
  jsonDoc["SSID"] = SSID;
  jsonDoc["PASSWORD"] = PASS;
  jsonDoc["Token"] = Token;
  serializeJson(jsonDoc, Serial2);
  Serial.println("Line Setup");
  Serial.println(Status_Recieve());
  return Status_Recieve();
}
bool Steam_APMode(String SSID,String PASS){
  jsonDoc["Type"] = "APMode";
  jsonDoc["SSID"] = SSID;
  jsonDoc["PASSWORD"] = PASS;
  serializeJson(jsonDoc, Serial2);
  Serial.println("APMode");
  Serial.println(Status_Recieve());
  return Status_Recieve();
}
bool Steam_STAMode(String SSID,String PASS){
  jsonDoc["Type"] = "STAMode";
  jsonDoc["SSID"] = SSID;
  jsonDoc["PASSWORD"] = PASS;
  serializeJson(jsonDoc, Serial2);
  Serial.println("APMode");
  Serial.println(Status_Recieve());
  return Status_Recieve();
}
bool line_Cap(){
  jsonDoc["Type"] = "Line_Cap";
  serializeJson(jsonDoc, Serial2);
  Serial.println("Line Cap");
  Serial.println(Status_Recieve());
  return Status_Recieve();
}
String Check_connect(){
  jsonDoc["Type"] = "Check_connect";
      serializeJson(jsonDoc, Serial2);
      uint8_t timer = 0;
      while (Serial2.available() > 0 || timer < 4) {
        Serial2.setTimeout(1000);
        //Serial.println(timer);
        DeserializationError err = deserializeJson(jsonDoc, Serial2);
        if (!jsonDoc["IP"].isNull()) {
         Serial.println(jsonDoc["IP"].as<String>());
         //return jsonDoc["IP"].as<String>();
          break;
        }
        timer ++;
      }
}
void Reset_Cam(){
  jsonDoc["Type"] = "Reset";
  serializeJson(jsonDoc, Serial2);
  Serial.println("Reset");
  Serial.println(Status_Recieve());
  // return Status_Recieve();
}