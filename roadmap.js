function updateProgress(id, percent) {
  const progressBar = document.getElementById(id);
  progressBar.innerHTML = `<div class="progress-fill"
  style="width:${percent}%"></div>`;
  }
  Wrap
  // Simulate progress
  updateProgress("phase1-progress", 60);
  updateProgress("phase2-progress", 30);
  updateProgress("phase3-progress", 10);