function openModal(src) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "flex";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}
