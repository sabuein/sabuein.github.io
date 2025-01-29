"use strict";

// Some helpers
const id = (elementId) => document.getElementById(elementId);
const createElement = (tag, attributes) => Object.assign(document.createElement(tag), attributes);

const OPENAI_API_KEY = "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";

const typeText = (element, text, speed = 30) => {
    let i = 0;
    element.textContent = "";

    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
};

const generateVideoIntroInternally = async (textarea) => {
    const select = id("modelLLM"), output = id("generatedIntro"), p = createElement("p", { id: "generatedIntroContent", textContent: "Processing..." }), detailsInput = id("formDetails"), detailsOutput = id("introDetails");

    output.appendChild(p);
    detailsInput.removeAttribute("open");
    detailsOutput.setAttribute("open", "open");

    try {
        const selectValue = select.options[select.selectedIndex].value;
        const selectText = select.options[select.selectedIndex].text;
        const scriptText = textarea.value.trim();
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: selectValue,
                "store": true,
                messages: [
                    {
                        role: "user",
                        content: `Can you suggest a catchy intro for a video I want to add to my YouTube channel, please? The video script is: ${scriptText}.`
                    }
                ]
            })
        });

        const data = await response.json();
        if (data && output) {
            typeText(p, data.choices[0].message.content.trim());
            detailsOutput.appendChild(createElement("button", {
                type: "button",
                id: "copyButton",
                title: "Copy to Clipboard!",
                textContent: "Copy to Clipboard!",
                onclick: () => copyToClipboard(p)
            }));

        } else p.textContent = "Please enter a script to generate an intro.";
    } catch (error) {
        console.error("Error:", error);
        p.textContent = "An error occurred while generating the intro.";
    }
};

/** This function reset height to auto to calculate new height, then sets height to scrollHeight. */
const autoResize = (textarea) => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
};

const copyToClipboard = (element) => {
    /*
    textarea.select();
    document.execCommand("copy");
    */
    // Copy the text inside the text field
    navigator.clipboard.writeText(element.textContent);
    alert("Intro copied to clipboard!");
};

window.addEventListener("load", (event) => {
    const form = id("scriptForm"),
        textarea = id("scriptText");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        id("generatedIntro").innerHTML = "";
        if (id("copyButton")) id("copyButton").remove();
        await generateVideoIntroInternally(textarea);
        form.reset();
    });

    textarea.addEventListener("input", () => autoResize(textarea));

    // Initial resize in case there's pre-filled content
    autoResize(textarea);
});