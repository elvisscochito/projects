/** @note unused code, original API was provided by Rapid API but it broken, so I change it to a new one */

/* const OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '71e59e906dmshfdc9ed284df2469p1b599cjsn0355f0f200d5',
        'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
    }
}; */

const fetchData = (ip) => {
    return fetch(`http://api.ipstack.com/${ip}?access_key=632e76960ad92206bb4ad557be3f2c16`)
        .then(res => res.json())
        /** @note comment to continue the code dawn bellow */
        /* .then(data => console.log(data)) */
        .catch(err => console.log(err));
};

/* const $ = (selector) => document.getElementById(selector); */

const form = document.getElementById("form");
/* const input = $("input").value; */
const userIp = document.getElementById("userIp");
const submit = document.getElementById("submit");
const results = document.getElementById("results");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    /** @note access to ip value in the input field */
    const { value } = userIp;

    submit.setAttribute('disabled', '');
    submit.setAttribute('aria-busy', 'true');

    const ipInfo = await fetchData(value);

    if (ipInfo) {
        results.innerHTML = JSON.stringify(ipInfo, null, 2);
    }

    submit.removeAttribute('disabled');
    submit.removeAttribute('aria-busy');
});
