# Themes and Palettes

``` nonum
HHDataList.setGlobalThemeName('firebrick');
HHDataList.removeDefaultTheme();

HHDataList.addPalette({
  name: 'Dodger Blue',
  color1: '#ffffff',
  color2: '#e6f2ff',
  color3: '#cce6ff',
  color4: '#4da6ff',
  color5: '#0073e6',
  color6: '#0059b3'
});

console.log(HHDataList.getPaletteNames());

console.log(HHDataList.addTheme({
  name: 'Add Theme',
  tabButtonColor: '#961d1d',
  tabBorderColor: '#961d1d',
  controlColor: '#ffffff',
  controlColorHover: '#ffffff',
  controlBorderColor: '#da3e3e',
  controlBorderColorHover: '#961d1d',
  controlBackgroundColor: '#da3e3e',
  controlBackgroundColorHover: '#961d1d',
  controlOpacityDisabled: '80%',
  toggleButtonColorOff: '#ffffff',
  toggleButtonColorOn: '#961d1d',
  toggleButtonBorderColorOff: '#961d1d',
  toggleButtonBorderColorOn: '#da3e3e',
  tottleButtonBackgroundColorOff: '#961d1d',
  tottleButtonBackgroundColorOn: '#fbeaea',
  descriptionLinkColor: '#961d1d',
  descriptionLinkColorHover: '#da3e3e',
  checkableLabelColor: 'var(--bs-body-color)',
  checkableBorderColor: '#f3bfbf',
  checkableBorderColorChecked: '#961d1d',
  checkableBackgroundColor: '#ffffff',
  checkableBackgroundColorChecked: '#961d1d',
  recordBorderColor: '#f7d4d4',
  recordBorderColorHover: '#f7d4d4',
  recordBorderColorOpen: '#f3bfbf',
  recordTitleColor: '#961d1d',
  recordTitleBackgroundColor: '#f7d4d4',
  recordTitleButtonColor: '#961d1d',
  recordTitleButtonColorHover: '#ffffff',
  recordTitleButtonColorActive: '#961d1d',
  recordTitleButtonBorderColor: 'transparent',
  recordTitleButtonBorderColorHover: '#961d1d',
  recordTitleButtonBorderColorActive: '#961d1d',
  recordTitleButtonBackgroundColor: 'transparent',
  recordTitleButtonBackgroundColorHover: '#961d1d',
  recordTitleButtonBackgroundColorActive: '#ffffff',
  recordFieldLabelColor: '#da3e3e',
  recordFieldInputColor: '#961d1d',
  recordFieldInputColorDisabled: '#961d1d',
  recordFieldInputBorderColor: '#961d1d',
  recordFieldInputBorderColorDisabled: '#fbeaea',
  recordFieldInputBackgroundColor: '#ffffff',
  recordFieldInputBackgroundColorDisabled: '#fbeaea',
  recordFieldTextareaColor: '#961d1d',
  recordFieldTextareaColorDisabled: '#961d1d',
  recordFieldTextareaBorderColor: '#961d1d',
  recordFieldTextareaBorderColorDisabled: '#fbeaea',
  recordFieldTextareaBackgroundColor: '#ffffff',
  recordFieldTextareaBackgroundColorDisabled: '#fbeaea',
  recordFieldSelectColor: '#961d1d',
  recordFieldSelectBorderColor: '#fbeaea',
  recordFieldSelectBackgroundColor: '#fbeaea',
  recordFieldLinkColor: '#961d1d',
  recordFieldLinkBorderColor: '#fbeaea',
  recordFieldLinkBackgroundColor: '#fbeaea',
  recordFieldLinkColorHover: '#da3e3e',
  recordFieldButtonColor: '#ffffff',
  recordFieldButtonBorderColor: '#961d1d',
  recordFieldButtonBackgroundColor: '#961d1d',
  recordFieldButtonOpacityDisabled: '65%',
  newRecordBorderColor: '#961d1d',
  newRecordBorderColorHover: '#961d1d',
  newRecordBorderColorOpen: '#961d1d',
  newRecordTitleColor: '#ffffff',
  newRecordTitleBackgroundColor: '#961d1d',
  newRecordTitleButtonColor: '#ffffff',
  newRecordTitleButtonColorHover: '#961d1d',
  newRecordTitleButtonBorderColor: 'transparent',
  newRecordTitleButtonBorderColorHover: '#ffffff',
  newRecordTitleButtonBackgroundColor: 'transparent',
  newRecordTitleButtonBackgroundColorHover: '#ffffff',
  newRecordFieldLabelColor: '#961d1d',
  newRecordFieldLabelColorRequired: '#da3e3e',
  newRecordFieldInputColor: '#961d1d',
  newRecordFieldInputBorderColor: '#961d1d',
  newRecordFieldInputBackgroundColor: '#ffffff',
  newRecordSubmitButtonColor: '#ffffff',
  newRecordSubmitButtonColorHover: '#ffffff',
  newRecordSubmitButtonBorderColor: '#da3e3e',
  newRecordSubmitButtonBorderColorHover: '#961d1d',
  newRecordSubmitButtonBackgroundColor: '#da3e3e',
  newRecordSubmitButtonBackgroundColorHover: '#961d1d',
  createdRecordBorderColor: '#961d1d',
  createdRecordBorderColorHover: '#961d1d',
  createdRecordBorderColorOpen: '#961d1d',
  createdRecordTitleColor: '#ffffff',
  createdRecordTitleBackgroundColor: '#961d1d',
  createdRecordTitleButtonColor: '#ffffff',
  createdRecordTitleButtonColorHover: '#961d1d',
  createdRecordTitleButtonBorderColor: 'transparent',
  createdRecordTitleButtonBorderColorHover: '#ffffff',
  createdRecordTitleButtonBackgroundColor: 'transparent',
  createdRecordTitleButtonBackgroundColorHover: '#ffffff',
  createdRecordFieldLabelColor: '#da3e3e',
  createdRecordFieldInputColor: '#961d1d',
  createdRecordFieldInputBorderColor: '#fbeaea',
  createdRecordFieldInputBackgroundColor: '#fbeaea'
}));

console.log(HHDataList.addThemeFromPalette(
  {
    name: 'My Palette',
    color1: '#ffffff',
    color2: '#f8ecf8',
    color3: '#f1daf1',
    color4: '#ebc7eb',
    color5: '#963696',
    color6: '#702970'
  }, 
  { checkableLabelColor: 'var(--bs-body-color)' }, 
  'Add Theme From Palette'
));

console.log(HHDataList.addThemeFromPaletteName(
  'Silverberry', 
  { checkableLabelColor: 'var(--bs-body-color)' }, 
  'Add Theme From Palette Name'
));

console.log(HHDataList.addThemeFromThemeName(
  'Orangewood', 
  { checkableLabelColor: 'var(--bs-body-color)' }, 
  'Add Theme From Theme Name'
));
```
