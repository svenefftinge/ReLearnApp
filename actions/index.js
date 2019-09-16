import * as DocumentPicker from 'expo-document-picker';
// Action Creator
export const addRecording = (recording) => {
    console.log("You added a recording: ", recording);
    // The Action being returned
    return {
        type: "RECORDING_ADDED",
        payload: recording
    }
};
export function addRecordingFile() {
    // We can invert control here by returning a function - the "thunk".
    // When this function is passed to `dispatch`, the thunk middleware will intercept it,
    // and call it with `dispatch` and `getState` as arguments.
    // This gives the thunk function the ability to run some logic, and still interact with the store.
    async function pickRecording() {
        let result = await DocumentPicker.getDocumentAsync({ type: '*/*' });

        if (result.uri) {
            //upload function(result.uri);
            //return result;
            console.log(result);
            return {
                eventID: "0",
                id: "12345abaccaa",
                name: "Whitee Hall",
                date: new Date('1995-12-17T03:24:01'),
                status: "loading",
                recordings: 5,
                uri: result.uri,
                location: "White Hall",
                localTranscription: "The lazy cat jumped over the dog.",
                serverTranscription: ""
            };
        } else {
            throw "nothing selected";
        }
    }
    return function(dispatch) {
        return pickRecording().then(
            (result) => {
                        dispatch(addRecording(result));

                        //Result is in the system now, populate it.
                        console.log("it works");
                        },
            (error) => console.log(error),
        );
    };
}

