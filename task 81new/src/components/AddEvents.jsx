import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('page1');

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {currentPage === 'page1' ? (
        <Page1 handlePageChange={handlePageChange} />
      ) : (
        <Page2 handlePageChange={handlePageChange} />
      )}
    </div>
  );
}

function Page1({ handlePageChange }) {
  return (
    <div>
      <h1>Page 1</h1>
      <p>This is page 1.</p>
      <button onClick={() => handlePageChange('page2')}>Go to Page 2</button>
    </div>
  );
}

function Page2({ handlePageChange }) {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [status, setStatus] = useState('pending');
  const [repeat, setRepeat] = useState(false);
  const [sendReminder, setSendReminder] = useState(false);
  const [eventLink, setEventLink] = useState('');
  const [file, setFile] = useState(null);

  const handleEmployeeSelect = (event) => {
    setSelectedEmployee(event.target.value);
  };

  const handleClientSelect = (event) => {
    setSelectedClient(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleRepeatChange = (event) => {
    setRepeat(event.target.checked);
  };

  const handleSendReminderChange = (event) => {
    setSendReminder(event.target.checked);
  };

  const handleEventLinkChange = (event) => {
    setEventLink(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      selectedEmployee,
      selectedClient,
      status,
      repeat,
      sendReminder,
      eventLink,
      file,
    });
  };

  return (
    <div>
      <h1>Page 2</h1>
      <p>This is page 2.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="employee">Select Employee *</label>
          <select id="employee" value={selectedEmployee} onChange={handleEmployeeSelect}>
            <option value="">Nothing selected</option>
            <option value="host">Host</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="client">Select Client *</label>
          <select id="client" value={selectedClient} onChange={handleClientSelect}>
            <option value="">Nothing selected</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select id="status" value={status} onChange={handleStatusChange}>
            <option value="pending" selected>Pending</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="repeat">Repeat</label>
          <input type="checkbox" id="repeat" checked={repeat} onChange={handleRepeatChange} />
        </div>
        <div className="form-group">
          <label htmlFor="reminder">Send Reminder</label>
          <input type="checkbox" id="reminder" checked={sendReminder} onChange={handleSendReminderChange} />
        </div>
        <div className="form-group">
          <label htmlFor="link">Event Link</label>
          <input type="text" id="link" value={eventLink} onChange={handleEventLinkChange} placeholder="e.g. https://www.example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="file">Add File</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <input type="submit" value="Save" />
          <input type="reset" value="Cancel" />
        </div>
      </form>
      <button onClick={() => handlePageChange('page1')}>Go back to Page 1</button>
    </div>
  );
}

export default App;