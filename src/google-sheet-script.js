// This script needs to be added to your Google Sheets using Apps Script
// Follow these steps:
// 1. Create a new Google Sheet
// 2. Go to Extensions > Apps Script
// 3. Replace any code with this script
// 4. Deploy as a web app (set access to "Anyone, even anonymous")
// 5. Copy the web app URL and use it as the form action in your contact.html

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Subject', 'Message']);
    }
    
    // Add the new submission with timestamp
    sheet.appendRow([
      new Date(), 
      data.Name || '',
      data.Email || '',
      data.Subject || '',
      data.Message || ''
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// This function handles GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 'result': 'This endpoint supports POST requests only.' }))
    .setMimeType(ContentService.MimeType.JSON);
}
