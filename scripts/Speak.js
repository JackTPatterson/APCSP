$('document').ready(function () {
            changeWord();
            $("#voice").val("Google US English");
        })

        function fadeOut() {
            $('.name-div').fadeOut()
        }



        button.addEventListener('click', function (e) {
            $('#speech-msg').val(word)
            speak(speechMsgInput.value);
        });

        play.addEventListener('click', function (e) {
            if (speechMsgInput.value.length > 0) {
                speak(speechMsgInput.value);
            }
        });

        submitBtn = document.getElementById('submit-btn');

        setInterval(function () {
            document.getElementById('score').innerHTML = score;
        }, 1000);

        submitBtn.addEventListener('click', function (e) {

            if ($('#txt-inp').val().length > 1) {
                if ($('#txt-inp').val() == word) {
                    $('#answer').html("Correct")
                    score += 1;
                    $('#txt-inp').val("")
                    changeWord()
                    if (wordLength == 14) {
                        wordLength = 14;
                    } else {
                        wordLength += 1;
                    }

                } else {
                    $('#answer').html("Incorrect")
                    score = 0;
                    wordLength = 3;
                    changeWord()
                    addData()
                }
            }
        });










        // Fetch the list of voices and populate the voice options.
        function loadVoices() {
            // Fetch the available voices.
            var voices = speechSynthesis.getVoices();

            // Loop through each of the voices.
            voices.forEach(function (voice, i) {
                // Create a new option element.
                var option = document.createElement('option');

                // Set the options value and text.
                option.value = voice.name;
                option.innerHTML = voice.name;

                // Add the option to the voice selector.
                voiceSelect.appendChild(option);
            });
        }

        // Execute loadVoices.
        loadVoices();

        // Chrome loads voices asynchronously.
        window.speechSynthesis.onvoiceschanged = function (e) {
            loadVoices();
        };


        // Create a new utterance for the specified text and add it to
        // the queue.
        function speak(text) {
            // Create a new instance of SpeechSynthesisUtterance.
            var msg = new SpeechSynthesisUtterance();

            // Set the text.
            msg.text = text;

            // Set the attributes.
            msg.volume = parseFloat(volumeInput.value);
            msg.rate = parseFloat(rateInput.value);
            msg.pitch = parseFloat(pitchInput.value);

            // If a voice has been selected, find the voice and set the
            // utterance instance's voice attribute.
            if (voiceSelect.value) {
                msg.voice = speechSynthesis.getVoices().filter(function (voice) {
                    return voice.name == voiceSelect.value;
                })[0];
            }

            // Queue this utterance.
            window.speechSynthesis.speak(msg);
        }