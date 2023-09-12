const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&timezone=Asia%2FTokyo';

fetch(url)
  .then(data => data.json())
  .then(json => console.log(json))