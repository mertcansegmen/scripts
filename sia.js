const rawSiaEntries = `
15:30,18:00
08:30,12:00
13:15,18:00
`;

const hours = rawSiaEntries
    .trim()
    .split("\n")
    .map(entry => {
        const hourDiffInfo = entry.split(",");
        const startTime = hourDiffInfo[0];
        const endTime = hourDiffInfo[1];

        const startHour = startTime.split(":")[0];
        const startMinute = startTime.split(":")[1];

        const endHour = endTime.split(":")[0];
        const endMinute = endTime.split(":")[1];

        const startDate = new Date(2022, 1, 1, parseInt(startHour), parseInt(startMinute));
        const endDate = new Date(2022, 1, 1, parseInt(endHour), parseInt(endMinute));

        var hour = Math.abs(startDate - endDate) / 36e5;
        return hour;
    });

const totalHours = hours.reduce((acc, el) => {
    return acc + el;
})

console.log("Total: " + totalHours);
