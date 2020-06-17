let arr = [
    ["Home", "#"],
    ["Profile", "#"],
    ["Setting", "#"],
    ["Log Out", "#"],
];

for (let i = 0; i < arr.length; i++) {
    let sidebar = document.getElementById("sidebar");
    let array = document.createElement("h4");

    sidebar.appendChild(array);

    for (let j = 0; j < arr[i].length; j++) {
        array.innerHTML = `<a href="${arr[j]}">${arr[i][0]}</a> <div class="space"><div> `;
        console.log(`${arr[i][j]}`);
    }
}
