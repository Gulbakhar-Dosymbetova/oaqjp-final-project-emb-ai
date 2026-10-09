async function runEmotionAnalysis() {
    const input = document.getElementById("textToAnalyze").value;
    const output = document.getElementById("system_response");

    output.textContent = "Analyzing...";

    try {
        const response = await fetch(
            `/emotionDetector?textToAnalyze=${encodeURIComponent(input)}`
        );
        const result = await response.text();
        output.textContent = result;
    } catch (error) {
        output.textContent = `Request failed: ${error}`;
    }
}
