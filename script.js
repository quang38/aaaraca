// Lấy dữ liệu từ data.json
fetch('data.json')
  .then(response => response.json()) // Chuyển dữ liệu trả về thành JSON
  .then(jsonData => {
    const container = document.getElementById("button-container");

    // Duyệt qua từng item trong jsonData và tạo nút
    jsonData.forEach(item => {
      const button = document.createElement("button");

      // Thêm ảnh
      button.innerHTML = `<img src="${item.image}" alt="Button Image">`;

      // Sự kiện click chuyển đến link
      button.addEventListener("click", () => {
        window.open(item.link, "_blank");
      });

      container.appendChild(button);
    });
  })
  .catch(error => console.error('Lỗi khi tải dữ liệu:', error));
