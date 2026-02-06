export function openModal(sub, time, day = null) {
  const modal = document.getElementById("modal");
  
  // Get current day if not provided
  const currentDay = day || document.getElementById("dayTitle").textContent;
  
  modal.innerHTML = `
    <div class="modal-overlay" onclick="closeModal()"></div>
    <div class="modal-content sheet">
      <div class="glass" style="padding: 1.5rem; width: 100%;">
        <div class="modal-header">
          <h2>${sub.name}</h2>
          <span class="subject-type-badge ${sub.type.toLowerCase()}">${sub.type}</span>
        </div>
        
        <div class="modal-details">
          <div class="detail-item">
            <span class="detail-label">📅 Day:</span>
            <span class="detail-value">${currentDay}</span>
          </div>
          
          <div class="detail-item">
            <span class="detail-label">🕐 Time:</span>
            <span class="detail-value">${time}</span>
          </div>
          
          <div class="detail-item">
            <span class="detail-label">👨‍🏫 Faculty:</span>
            <span class="detail-value">${sub.faculty}</span>
          </div>
          
          <div class="detail-item">
            <span class="detail-label">🔢 Course Code:</span>
            <span class="detail-value">${sub.code}</span>
          </div>
          
          ${sub.batch ? `
          <div class="detail-item">
            <span class="detail-label">👥 Batch:</span>
            <span class="detail-value">${sub.batch}</span>
          </div>
          ` : ''}
        </div>
        
        <div class="modal-actions">
          <button class="btn btn-secondary" onclick="copySubjectDetails('${sub.name}', '${time}', '${sub.faculty}', '${sub.code}')">
            📋 Copy Details
          </button>
          <button class="btn btn-primary" onclick="closeModal()">Close</button>
        </div>
      </div>
    </div>
  `;
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

export function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  document.body.style.overflow = "";
  setTimeout(() => {
    modal.innerHTML = "";
  }, 300);
}

// Function to copy subject details to clipboard
export function copySubjectDetails(name, time, faculty, code) {
  const details = `Subject: ${name}\nTime: ${time}\nFaculty: ${faculty}\nCode: ${code}`;
  navigator.clipboard.writeText(details).then(() => {
    // Show temporary confirmation
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '✅ Copied!';
    button.disabled = true;
    
    setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}
