Blockly.JavaScript['ESP32-CAM-PBModule'] = function(block) {
  var value_mode = block.getFieldValue('mode');
  var number_RX = block.getFieldValue('RX');
  var number_TX = block.getFieldValue('TX');
  var variable_OUTPUT = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('nameOfVariable_OUTPUT'), Blockly.Variables.NAME_TYPE);
  var value_SSID = Blockly.JavaScript.valueToCode(block, 'SSID', Blockly.JavaScript.ORDER_ATOMIC);
  var value_PASS = Blockly.JavaScript.valueToCode(block, 'PASSWORD', Blockly.JavaScript.ORDER_ATOMIC);
  var value_Token = Blockly.JavaScript.valueToCode(block, 'Token', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `#EXTINC #include "ESP-CAM-PBModule.h" #END\n
  Serial2.begin(115200, SERIAL_8N1, ${number_RX}, ${number_TX});\nSerial.begin(115200);\n`;
  if(value_mode == '0'){
    code += `${variable_OUTPUT} = line_setup(${value_SSID},${value_PASS},${value_Token});`;
  }
  if(value_mode == '1'){
    code += `${variable_OUTPUT} = Steam_APMode(${value_SSID},${value_PASS});`;
  }
  if(value_mode == '2'){
    code += `${variable_OUTPUT} = Steam_STAMode(${value_SSID},${value_PASS});`;
  }
  return code;
};
  Blockly.JavaScript['ESP32-CAM_Cap'] = function(block) {
    var variable_OUTPUT = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('nameOfVariable_Result'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_OUTPUT} = line_Cap();`;
    return code;
  };
  Blockly.JavaScript['ESP32-CAM_ReadIP'] = function(block) {
    var code = `Check_connect()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['ESP32-CAM_Reset'] = function(block) {
    var code = `Reset_Cam();`;
    return code;
  };