// Redux. Returns list of recordings 

export default function() {
    return [
        {
            id: "12345abacca",
						name: "White Hall",
						date: new Date('1995-12-17T03:24:01'),
						status: "recording",
            recordings: 5,
            location: "White Hall"    
        },
        {
            id: "253s35sdfg4",
						name: "Gates Hall",
						status: "transcribing",
						date: new Date('1995-12-17T03:24:01'),
            recordings: 1,
            location: "Gates Hall"
        }
    ]
}