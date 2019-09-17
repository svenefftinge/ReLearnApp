// Redux. Returns list of recordings
// Initial State
const initialState = [
    {
        eventID: "0",
        id: "12345abacca",
        name: "White Hall",
        date: new Date('1995-12-17T03:24:01'),
        status: "recording",
        recordings: 5,
        uri: "https://github.com/robovm/apple-ios-samples/raw/master/avTouch/sample.m4a",
        location: "White Hall",
        localTranscription: "The lazy cat jumped over the dog.",
        serverTranscription: ""
    },
    {
        eventID: "0",
        id: "253s35sdfg4",
        name: "Gates Hall",
        status: "transcribing",
        date: new Date('1995-12-17T03:24:01'),
        recordings: 1,
        uri: "https://github.com/robovm/apple-ios-samples/raw/master/avTouch/sample.m4a",
        location: "Gates Hall",
        localTranscription: "Yer bad. You should feel bad.",
        serverTranscription: ""
    }
];

export default function(state = initialState, action) {
    switch (action.type) {
        // Logged In
        case 'RECORDING_ADDED': {
            return [...state, action.payload];
        }
        // Default
        default: {
            console.log(state);
            return state;
        }
    }
}