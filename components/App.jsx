import React from "react";
import Footer from "./footer";
import Header from "./header";
import Note from "./note";
import notes from "../notes";



function App() {
    return <div>
        <Header />
        {/* <Note 
            title = "This is the title"
            content = "This is the contents"
        /> */}

        {notes.map((noteItem) => (<Note
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
        />
        ))};

        <Footer />
    </div>
}

export default App;
