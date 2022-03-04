Blockly.Blocks['ESP32-CAM-PBModule'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP32-CAM Set pin RX")
        .appendField(new Blockly.FieldNumber(23, 1), "RX")
        .appendField("TX")
        .appendField(new Blockly.FieldNumber(19, 1), "TX");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["LINE Notify", "0"],
                                                ["APMode","1"],
                                                ["STAMode","2"]]), "mode");
    this.appendValueInput("SSID")
        .appendField("SSID:");
    this.appendValueInput("PASSWORD")
        .appendField("PASSWORD:");
    this.appendValueInput("Token")
        .appendField("Token:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("Connect_Status"), "nameOfVariable_OUTPUT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Setup your ESP32-CAM Pin");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['ESP32-CAM_Cap'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Send Picture to Line notify");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("Capture_Result"), "nameOfVariable_Result");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Send Picture to Line notify");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['ESP32-CAM_ReadIP'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read IP from Camera");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(165);
 this.setTooltip("read IP Address from ESP32-CAM");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['ESP32-CAM_Reset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Reset Camera");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Reset Camera");
 this.setHelpUrl("");
  }
};