const f = document.getElementById('myfile');
f.addEventListener('change', evt => {
    const input = evt.target;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        // 読み出し結果の表示
        console.log(reader.result);
    };
    reader.readAsText(file); // 読み込み開始
});