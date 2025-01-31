const colleges = [
    { name: "VJTI Mumbai", url: "https://vjti.ac.in/" },
    { name: "Sardar Patel Institute of Technology", url: "https://www.spit.ac.in/" },
    { name: "KJ Somaiya College of Engineering", url: "https://kjsce.somaiya.edu/en" },
    { name: "Mukesh Patel School of Technology", url: "https://engineering.nmims.edu/" },
    { name: "Vidyalankar Institute of Technology", url: "https://vit.edu.in/" },
    { name: "Fr. C. Rodrigues Institute of Technology", url: "https://www.fcrit.ac.in/" },
    { name: "Thadomal Shahani Engineering College", url: "https://tsec.edu/" },
    { name: "Rajiv Gandhi Institute of Technology", url: "http://www.rgitmumbai.in/" },
    { name: "Atharva College of Engineering", url: "https://www.atharvacoe.ac.in/" },
    { name: "Vivekanand Education Society's Institute of Technology", url: "https://vesit.ves.ac.in/" },
    { name: "SIES Graduate School of Technology", url: "https://www.siesgst.edu.in/" },
    { name: "Don Bosco Institute of Technology", url: "https://www.dbit.in/" },
    { name: "Rizvi College of Engineering", url: "http://www.eng.rizvi.edu.in/" },
    { name: "St. Francis Institute of Technology", url: "https://www.sfit.ac.in/" },
    { name: "Lokmanya Tilak College of Engineering", url: "http://www.ltce.in/" },
    { name: "Terna Engineering College", url: "https://www.ternaengg.ac.in/" },
    { name: "Datta Meghe College of Engineering", url: "https://www.dmce.ac.in/" },
    { name: "KJ Somaiya Polytechnic", url: "https://www.somaiya.edu/kjs/polytechnic/" },
    { name: "NMIMS Mukesh Patel School of Technology", url: "https://engineering.nmims.edu/" },
    { name: "MGM College of Engineering and Technology", url: "https://www.mgmmumbai.ac.in/" },
    { name: "Shah and Anchor Kutchhi Engineering College", url: "https://www.shahandanchor.com/home/" },
    { name: "Xavier Institute of Engineering", url: "https://www.xavier.ac.in/" },
    { name: "VPM’s Maharshi Parshuram College of Engineering", url: "https://www.vpmmpce.edu.in/" },
    { name: "Agnel Polytechnic", url: "http://www.fragnelpolytechnic.ac.in/" },
    { name: "Anjuman-I-Islam's M. H. Saboo Siddik College of Engineering", url: "http://www.mhssce.ac.in/" },
    { name: "A. C. Patil College of Engineering", url: "https://www.acpce.org/" },
    { name: "SPCE (Sardar Patel College of Engineering)", url: "https://www.spce.ac.in/" },
    { name: "Bharti Vidyapeeth College of Engineering", url: "https://bvcoenm.edu.in/" },
    { name: "Ramrao Adik Institute of Technology", url: "https://www.rait.ac.in/" },
    { name: "Smt. Indira Gandhi College of Engineering", url: "http://www.sigce.edu.in/" },
    { name: "Pillai College of Engineering", url: "https://www.pce.ac.in/" },
    { name: "Shivajirao S. Jondhale College of Engineering", url: "https://www.ssjcoe.edu.in/" },
    { name: "Yadavrao Tasgaonkar Institute of Engineering and Technology", url: "https://www.tasgaonkartech.com/" },
    { name: "Universal College of Engineering", url: "https://www.universalcollegeofengineering.edu.in/" },
    { name: "Jawahar Education Society’s A. C. Patil College of Engineering", url: "https://www.acpce.org/" },
    { name: "Father Agnel Technical College", url: "https://www.fragnel.ac.in/" },
    { name: "Indira Gandhi Institute of Technology", url: "https://www.igitsarang.ac.in/" },
    { name: "Rustomjee Academy for Global Careers", url: "https://www.ragc.edu.in/" },
    { name: "Saraswati College of Engineering", url: "https://saraswatiengineering.in/" },
    { name: "Dr. D. Y. Patil College of Engineering", url: "https://www.dypatil.edu/schools/engineering/" },
    { name: "Priyadarshini Institute of Engineering & Technology", url: "https://www.priyadarshini.org/" },
    // Add remaining colleges up to 68...
];

// Function to display the list of colleges
function displayColleges(collegeList) {
    const collegeListElement = document.getElementById("collegeList");
    collegeListElement.innerHTML = "";

    collegeList.forEach(college => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = college.url;
        a.target = "_blank";
        a.textContent = college.name;
        li.appendChild(a);
        collegeListElement.appendChild(li);
    });
}

// Initial display of colleges
displayColleges(colleges);

// Function to search colleges based on user input
function searchColleges() {
    const searchTerm = document.getElementById("searchBar").value.toLowerCase();
    const filteredColleges = colleges.filter(college =>
        college.name.toLowerCase().includes(searchTerm)
    );
    displayColleges(filteredColleges);
}
