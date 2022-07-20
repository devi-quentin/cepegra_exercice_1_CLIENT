// Récupération liste métiers
fetch(urlApi + "ge/users/" + localStorage.userid).then(response => response.json()).then(response => {
    console.log(response.data)
    generateRadar(response.data[0])
})

const generateRadar = data => {
    let dataForRadar = []
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const element = data[key];
            if (key.includes('value')) {
                dataForRadar.push(element)
            }
        }
    }
    const radarLabels = [
        "THEME 1",
        "THEME 2",
        "THEME 3",
        "THEME 4",
        "THEME 5",
        "THEME 6",
    ];
    
    const radarData = {
    labels: radarLabels,
    datasets: [
        {
        label: "GE",
        backgroundColor: "rgba(255, 99, 132, .2)",
        borderColor: "rgb(255, 99, 132)",
        data: dataForRadar,
        fill: true,
        },
    ],
    };
    
    const radarConfig = {
    type: "radar",
    data: radarData,
    options: {
        elements: {
        line: {
            borderWidth: 3,
        },
        },
        scales: {
        r: {
            angleLines: {
            display: true,
            },
            min: 0,
            max: 4,
            ticks: {
            count: 5,
            },
        },
        },
    },
    };
    
    const monRadar = new Chart(document.getElementById("myChart"), radarConfig);
}




