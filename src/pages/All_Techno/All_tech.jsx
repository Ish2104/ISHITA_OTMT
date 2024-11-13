import React, { useState } from "react";
import { TablePagination } from "@mui/material";
import "./all_tech.css";

const rowsPerPageOptions = [5, 10, 15]; // Options for the number of rows per page

const All_tech = () => {
  // State for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  // State for search inputs
  const [trlSearch, setTrlSearch] = useState("");
  const [sectorSearch, setSectorSearch] = useState("");
  const [nameSearch, setNameSearch] = useState("");

  // Example table data
  const table_data = [
    {
      id: 12,
      name: "A Sim-to-Real Pipeline For Data Driven Learning in Networked Multi-Agent Systems",
      detail: "",
      trl: 9,
      sector: "Robotics / Artificial Intelligence",
      tech: "Multi-Agent Systems / Machine Learning",
      link: "#more-details-8",
    },


    {
      id: 62,
      name: "Visual Wildlife for Monitoring",
      detail: "",
      trl: 8,
      sector: "",
      tech: "Applications of AI",
      link: "",
    }, {
      id: 63,
      name: "miRSim: Seed-based Synthetic Small Non-coding RNA Sequence Simulator",
      detail: "",
      trl: 8,
      sector: "",
      tech: "Emerging Technologies in Medicine & Computing",
      link: "",
    }, {
      id: 64,
      name: "How Sweet is That? Machine Learning Models for Predicting Sweetness",
      detail: "",
      trl: 8,
      sector: "",
      tech: "Applications of AI",
      link: "",
    }, {
      id: 65,
      name: "Federated Visual Computing",
      detail: "",
      trl: 8,
      sector: "",
      tech: "Applications of AI",
      link: "",
    },
     {
      id: 66,
      name: "Web Portal to check disability friendliness of a website",
      detail: "",
      trl: 8,
      sector: "",
      tech: "Applications of AI",
      link: "",
    },
     {
      id: 67,
      name: "Detection of Intestinal Tuberculosis",
      detail: "",
      trl: 8,
      sector: "",
      tech: "Applications of AI",
      link: "",
    },
     {
      id: 68,
      name: "Web Portal to check the Disability Friendliness of a website",
      detail: "",
      trl: 8,
      sector: "",
      tech: "Emerging Technologies in Medicine & Computing",
      link: "",
    },
     {
      id: 69,
      name: "Washkaro TB Screening Application",
      detail: "",
      trl: 8,
      sector: "",
      tech: "Emerging Technologies in Medicine & Computing",
      link: "",
    },
     {
      id: 70,
      name: "Understanding COVID-19 Strain Emergence in the Light of Mobility Patterns",
      detail: "",
      trl: 8,
      sector: "",
      tech: "Emerging Technologies in Medicine & Computing",
      link: "",
    }, 
    {
      id: 71,
      name: "Patient Health Record App - Vitals Implementation",
      detail: "",
      trl: 8,
      sector: "",
      tech: "Emerging Technologies in Medicine & Computing",
      link: "",
    }, 
    {
      id: 72,
      name: "PHR App - Vitals Integration",
      detail: "",
      trl: 8,
      sector: "",
      tech: "Emerging Technologies in Medicine & Computing",
      link: "",
    }, 
    {
      id: 73,
      name: "PHR App - Building a comprehensive digital health system",
      detail: "",
      trl: 8,
      sector: "",
      tech: "The Budding Start-ups, Emerging Technologies in Medicine & Computing",
      link: "",
    }, 
    {
      id: 74,
      name: "Teaching Aura",
      detail: "",
      trl: 8,
      sector: "",
      tech: "The Budding Start-ups",
      link: "",
    }, 
    {
      id: 75,
      name: "Disability Friendliness Portal",
      detail: "",
      trl: 8,
      sector: "",
      tech: "Emerging Technologies in Medicine & Computing",
      link: "",
    }, 
    {
      id: 76,
      name: "Analysis of Work Stealing Queues",
      detail: "",
      trl: 8,
      sector: "",
      tech: "Smart & Intelligent World",
      link: "",
    }, 
    {
      id: 77,
      name: "Activation Functions in Neural Networks",
      detail: "",
      trl: 8,
      sector: "",
      tech: "Applications of AI",
      link: "",
    }, 

    {
      id: 72,
      name: "AIIMS Tuberculosis App",
      detail: "",
      trl: 7,
      sector: "",
      tech: "",
      link: "",
    }, {
      id: 73,
      name: "AIIMS Tuberculosis App",
      detail: "",
      trl: 7,
      sector: "",
      tech: "",
      link: "",
    }, {
      id: 74,
      name: "AIIMS Tuberculosis App",
      detail: "",
      trl: 7,
      sector: "",
      tech: "",
      link: "",
    }, {
      id: 75,
      name: "AIIMS Tuberculosis App",
      detail: "",
      trl: 7,
      sector: "",
      tech: "",
      link: "",
    }, {
      id: 76,
      name: "AIIMS Tuberculosis App",
      detail: "",
      trl: 7,
      sector: "",
      tech: "",
      link: "",
    },



    {
      id: 1,
      name: "TATDC: Trainer and Tester for Digital Circuits",
      detail:
        "This project introduces a cost-effective, portable, and low-power digital circuit trainer kit designed to serve multiple purposes in an electronics laboratory. It combines the functions of a digital trainer kit, IC tester, and voltmeter into a single device, improving efficiency and convenience for students and professionals. The compact form factor and multifunctionality eliminate the need for multiple instruments, streamlining lab experiments and facilitating quick debugging of digital circuits. This innovative solution is robust, space-saving, and unmatched in its ability to perform all three tasks within its budget.",
      trl: 7,
      sector:
        "Education Sector, Research and Development ,Consumer Electronics ,Telecommunications ,Automotive Electronics,Industrial Automation,Defense and Aerospace,Healthcare Technology",
      tech: "Embedded systems, PCB design, Firmware, Power management.",
      link: "/Brochure_New/TATDC_new.pdf",
    },
    {
      id: 2,
      name: "A SYSTEM FOR GENERATING STREAM-CIPHERED DOUBLE-KEY USING A RANDOMIZED-MATRIX FOR VARIED LENGTH TEXT AND IMAGE ",
      detail:
        "This project introduces a robust encryption system that employs a stream-ciphered double-key method using a randomized matrix, designed for securing both text and image data. By incorporating multiple layers of randomization and generating two keys, the system significantly enhances data security, making it resilient against future quantum computing threats. Its key features include one-time padding, easy customizability, and a complex stream cipher approach that ensures efficient encryption of varying data lengths. This technology is particularly valuable for safeguarding classified information, industrial and medical research, and sensitive transaction data against emerging cyber threats.",
      trl: "Experimental proof of Concept",
      sector:
        "Cybersecurity,Finance and Banking,Healthcare,Government and Defense,Telecommunications,E-commerce",
      tech: "Encryption Technology",
      link: "/Brochure_New/STREAM_CIPHERED_new.pdf",
    },
    {
      id: 3,
      name: "Troubleshooting Mobile Systems + Mobile display",
      detail:
        "Presented in India Mobile ongress and Comsnet.A research paper already published. Shared with Samsung",
      trl: 7,
      sector: "Telecommunications",
      tech: "Mobile Systems and User Experience",
      link: "#more-details-3",
    },

    {
      id: 5,
      name: "Web Page Load Time Analysis",
      detail: "Webpage load time in Mobile Device, no tool available`",
      trl: 7,
      sector: "Information Technology",
      tech: "Web Performance Optimization",
      link: "#more-details-5",
    },

    {
      id: 8,
      name: "NATIVE: Network Aggregation based Tiled Live Video Streaming",
      detail:
        "The COVID-19 pandemic has moved many interactions online, emphasizing the need for reliable video streaming. In New Delhi, India, cellular networks often fail to provide adequate Quality of Experience (QoE) for platforms like Google Meet, with metrics such as lag and dropped calls being notably poor. To address this, we propose NATIVE (Network Aggregation based Tiled lIve Video strEaming), which uses a trusted nearby device to aggregate cellular connectivity. NATIVE employs tiled encoding, dividing video frames into tiles that are transmitted independently over different networks. The receiving device stitches these tiles together for seamless playback. We demonstrated NATIVE using two laptops and a cloud server as the video streamer.",
      trl: 7,
      sector: "Telecommunications",
      tech: "Network Optimization and Video Streaming Technology",
      link: "/Brochure_New/NATIVE_new.pdf",
    },

    {
      id: 15,
      name: "CloudLabs",
      detail:
        "This project enables remote access to hardware, such as FPGAs, through a web application featuring live board streaming and real-time control of switches. It automates hardware configuration, board booking, course registration, and query generation, allowing users to book slots and access the board via temporary pins and live camera feeds. Supporting self-paced learning modules lasting 2 to 8 weeks, the system integrates solutions for various domains like Embedded Systems, IoT, Robotics, and AI, reducing board damage and reliance on teaching assistants while speeding up evaluations. With over 150 students using the system frequently, it has recorded more than 30,000 bookings since January 2021, maintaining a failure rate of 1% or lower.",
      trl: 7,
      sector: "Education Technology",
      tech: "Remote Learning and Hardware Access",
      link: "/Brochure_New/Cloud_labs_new.pdf",
    },

    {
      id: 16,
      name: "GUI based Digital IC Tester",
      detail:
        "The proposed IC tester offers innovative features that enhance efficiency and usability in electronic testing. Its Selective Fault Identification allows for precise localization of faulty functional blocks, minimizing resource wastage, while Automatic IC Type Detection streamlines the testing process and reduces errors. A real-time pin-diagram display enhances user understanding of IC configurations, and the compact design using a Raspberry Pi ensures portability. The user-friendly PySimpleGUI interface makes testing accessible to those with limited technical expertise. By accurately identifying faults, the tester reduces electronic waste, with applications in electronics manufacturing, educational institutions, and environmental impact mitigation by salvaging partially functional ICs.",
      trl: 7,
      sector: "Electronics Manufacturing / Education",
      tech: "Testing and Fault Identification",
      link: "/Brochure_New/GUI_Tester_final.pdf",
    },
    
    {
      id: 46,
      name: "TLE Eliminators - Entrepreneurial Venture",
      detail: "",
      trl: 7,
      sector: "",
      tech: "The Budding Start-ups",
      link: "",
    },
    {
      id: 47,
      name: "Web Page Load Time Analysis",
      detail: "",
      trl: 7,
      sector: "",
      tech: "Computing Systems & Security",
      link: "",
    },
    {
      id: 48,
      name: "NATIVE: Network Aggregation based Tiled Live Video Streaming",
      detail: "",
      trl: 7,
      sector: "",
      tech: "Smart & Intelligent World",
      link: "",
    },
    {
      id: 49,
      name: "Interleaved Multi-Attention Network",
      detail: "",
      trl: 7,
      sector: "Applications of AI",
      tech: "",
      link: "",
    },
    {
      id: 50,
      name: "Quantum Cryptanalysis Techniques",
      detail: "",
      trl: 7,
      sector: "",
      tech: "Computing Systems & Security",
      link: "",
    },
    {
      id: 51,
      name: "Ergonomically Designed Workstation for Laptop Users",
      detail: "",
      trl: 7,
      sector: "",
      tech: "The Budding Start-ups",
      link: "",
    },
    {
      id: 52,
      name: "Autograding of Short Text Quizzes",
      detail: "",
      trl: 7,
      sector: "",
      tech: "Applications of AI",
      link: "",
    },
    

    {
      id: 53,
      name: "Backend migration of ALT App",
      detail: "",
      trl: 7,
      sector: "",
      tech: "",
      link: "",
    },
    {
      id: 54,
      name: "ENVEAVE: REARCHITECTING AND ENHANCING A MULTI-STAKEHOLDER PLATFORM FOR PRODUCTION SCALE",
      detail: "",
      trl: 7,
      sector: "",
      tech: "",
      link: "",
    },
    {
      id: 55,
      name: "QuesGen : A Question Paper Generator and Assessor",
      detail: "",
      trl: 7,
      sector: "",
      tech: "",
      link: "",
    },
    {
      id: 56,
      name: "Well-being Cell Portal",
      detail: "",
      trl: 7,
      sector: "",
      tech: "",
      link: "",
    },

    {
      id: 57,
      name: "No-Code Escrow Service for the Gig Economy",
      detail: "",
      trl: 7,
      sector: "",
      tech: "",
      link: "",
    },
    {
      id: 58,
      name: "Proactively Reducing the Hate Intensity of Online Posts via Hate Speech Normalization",
      detail: "",
      trl: 7,
      sector: "",
      tech: "",
      link: "",
    },
    {
      id: 59,
      name: "Design and Development of a District-level Early Warning System for COVID-19 Outbreak Detection and its National Implementation",
      detail: "",
      trl: 7,
      sector: "",
      tech: "",
      link: "",
    },
    {
      id: 60,
      name: "Personal Health Records App - ABDM Integration",
      detail: "",
      trl: 7,
      sector: "",
      tech: "",
      link: "",
    },
    {
      id: 61,
      name: "AIIMS Tuberculosis App",
      detail: "",
      trl: 7,
      sector: "",
      tech: "",
      link: "",
    },

















    {
      id: 14,
      name: "Seek Suspect: Project for person retrieval",
      detail:
        "This project automates the retrieval of criminal images from a database using minimal manually provided features like face and eye shape, removing the need for detailed sketches. By creating accurate facial image retrieval systems, we enhance criminal investigations and public safety, allowing law enforcement to quickly identify suspects.This unique approach fills a gap in existing solutions and can assist in locating missing persons, generating new faces, and refining facial details. Users can also customize attributes, such as eye formations, for tailored image adjustments.",
      trl: 6,
      sector: "Law Enforcement and Public Safety",
      tech: "Computer Vision, Artificial Intelligence (AI), Image Retrieval Systems",
      link: "/Brochure_New/SEEKnSUSPECT_new.pdf",
    },

    {
      id: 17,
      name: "Foodle",
      detail:
        "Foodle, a culinary word game, capitalizes on the intrinsic connection between language and food. Acknowledging that words related to the culinary world shape our cravings, the project introduces a five-letter word game inspired by the popular Wordle. The objective is to subtly encourage players toward nutritious, healthy, and sustainable eating practices.",
      trl: 6,
      sector: "Education and Wellness",
      tech: "Gamification, Nutrition, and Health Awareness",
      link: "/Brochure_New/Foodle_new.pdf",
    },
    {
      id: 18,
      name: "Experimental Validation of Optical Wireless Receiver using Solar Panel with Bandwidth Enhancement Circuit",
      detail: "",
      trl: 6,
      sector: "Telecommunications / Renewable Energy",
      tech: "Smart & Intelligent World",
      link: "",
    },
    {
      id: 19,
      name: "Aarogya",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Cognition & Information Processing",
      link: "",
    },
    {
      id: 20,
      name: "Demo of Hybrid LiFi/WiFi Network for an Indoor Environment",
      detail: ".",
      trl: 6,
      sector: "",
      tech: "Smart & Intelligent World",
      link: "",
    },
    {
      id: 21,
      name: "AI assisted consensus based risk staging system for multiple myeloma patients",
      detail: "",
      trl: 6,
      sector: "Emerging Technologies in Medicine & Computing",
      tech: "Applications of AI",
      link: "",
    },
    {
      id: 22,
      name: "Explainable AI decision model for ECG data of cardiac disorders",
      detail: "",
      trl: 6,
      sector: "Emerging Technologies in Medicine & Computing",
      tech: "Applications of AI",
      link: "",
    },
    {
      id: 23,
      name: "miRPipe: A Unified Computational Framework for a Robust, Reliable, and reproducible Identification of Novel miRNAs from the RNA Sequencing Data",
      detail: "",
      trl: 6,
      sector: "Emerging Technologies in Medicine & Computing",
      tech: "",
      link: "",
    },
    {
      id: 24,
      name: "Rapid Soil Testing Device",
      detail: "",
      trl: 6,
      sector: "Emerging Technologies in Medicine & Computing",
      tech: "Applications of AI",
      link: "",
    },
    {
      id: 25,
      name: "Malware Detection Through Behavioural Analysis",
      detail: "",
      trl: 6,
      sector: "Computing Systems & Security",
      tech: "Foundations of AI, Computing Systems & Security, Advances in AI",
      link: "",
    },
    {
      id: 26,
      name: "Federated Learning for commercial image soure",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Applications of AI",
      link: "",
    },
   {
      id: 27,
      name: "Explainable Resume Selection",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Smart & Intelligent World",
      link: "",
    },
    {
      id: 28,
      name: "WIFI TUNED : Monitoring Engagement in Online Participation by Harmonizing WiFi and Audio",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Smart & Intelligent World",
      link: "",
    },
    {
      id: 29,
      name: "Empirical Study on Assertion Use in Java Open Source Projects",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Applications of AI, Advances in AI",
      link: "",
    },
    {
      id: 30,
      name: "Voice Privacy Concerns of End Users",
      detail: "",
      trl: 6,
      sector: "Computing Systems & Security",
      tech: "Cognition & Information Processing",
      link: "",
    },
    {
      id: 31,
      name: "COG: A CSV based Ontology Editor",
      detail: "",
      trl: 6,
      sector: "Smart & Intelligent World",
      tech: "Foundations of AI",
      link: "",
    },
    {
      id: 32,
      name: "Multi-Modal Knowledge Graph Construction",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Applications of AI",
      link: "",
    },
    {
      id: 34,
      name: "Binary Classification Pipeline: Prediction of Antimalarial Peptides",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Applications of AI",
      link: "",
    },
    {
      id: 35,
      name: "AchieveIIITD",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Smart & Intelligent World",
      link: "",
    },
    {
      id: 36,
      name: "Hostel Website",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Smart & Intelligent World",
      link: "",
    },
    {
      id: 37,
      name: "No Dues",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Smart & Intelligent World",
      link: "",
    },
    {
      id: 38,
      name: "BookIIIT",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Smart & Intelligent World",
      link: "",
    },
    {
      id: 39,
      name: "CRAMS",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Smart & Intelligent World",
      link: "",
    },
    {
      id: 40,
      name: "FMS PORTAL - IIITD",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Smart & Intelligent World",
      link: "",
    },
    {
      id: 41,
      name: "SHAREIIIT",
      detail: "",
      trl: 6,
      sector: "",
      tech: "The Budding Start-ups",
      link: "",
    },
    {
      id: 42,
      name: "Design of Cortex M0 Based SoC for Biomedical Applications",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Self-reliance in Semiconductors",
      link: "",
    },
    {
      id: 43,
      name: "Time Table Generation and Room Booking System using Constraint Satisfaction Problem",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Applications of AI",
      link: "",
    },
    {
      id: 44,
      name: "Autonomous Delivery System for Hospitals and Hotels",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Smart & Intelligent World",
      link: "",
    },
    {
      id: 45,
      name: "Optimizing Performance/Energy of Caffe",
      detail: "",
      trl: 6,
      sector: "",
      tech: "Computing Systems & Security",
      link: "",
    },







    {
      id: 9,
      name: "0xFethr: Empowering voices in the shadows",
      detail:
        "0xFethr is a secure and decentralized platform for independent journalism and blog posting, leveraging web3 technology. Our advanced recommender system delivers personalized content tailored to user preferences, while our AI-driven text detection models and hate speech prevention measures promote safe and reliable information sharing. Join us in embracing a censorship-free environment at the forefront of web3 innovation.",
      trl: 5,
      sector: "Media and Communications",
      tech: "Web3 Technology, Artificial Intelligence (AI), Decentralized Platforms",
      link: "/Brochure_New/0xFethr_new.pdf",
    },
    {
      id: 4,
      name: "Optimization Of Tail End Latency In Edge Computing",
      detail:
        "We aim to study and reduce the major problem of tail latency in edge computing using deep reinforcement learning .",
      trl: 4,
      sector: "Edge Computing",
      tech: "AI, Deep Reinforcement Learning (DRL)",
      link: "#more-details-4",
    },

    {
      id: 7,
      name: "Microbenchmarking and Analyzing Tadeoffs in Control of Networked Drones",
      detail:
        "In this report, we primarily focus on two key use cases: delivery services and tracking multiple vehicles to ascertain their precise locations. By simulating the environment and employing a path-based model, we gather data from a camera attached to a drone for further processing. Our goal is to conduct controlled studies to analyze the factors affecting latency, power consumption, cost, and overall application performance. This approach aims to optimize the effectiveness of drone technology in enhancing delivery logistics and vehicle tracking capabilities.",
      trl: 4,
      sector: "Logistics and Transportation",
      tech: "Internet of Things (IoT), Drone Technology, and Data Analytics",
      link: "#more-details-7",
    },
    {
      id: 10,
      name: "Alternative approaches to recognizing and solving algorithmic bias",
      detail:
        "This study investigates how computer scientists and social scientists perceive algorithmic biases and the diverse practices that influence these algorithms. As key stakeholders in the problem-solving process, their insights are crucial for understanding and addressing the complexities surrounding algorithmic decision-making.",
      trl: 4,
      sector: "Technology Ethics and Governance",
      tech: "Artificial Intelligence (AI), Algorithmic Fairness, and Social Science Research",
      link: "#more-details-8",
    },
    {
      id: 11,
      name: "Implementing JRC Transceiver on RFSOC",
      detail:
        "Next-generation wireless communication systems in the millimeter wave and sub-6 GHz bands aim to deliver high-mobility Vehicle to Everything (V2X) services, requiring precise user tracking for optimal throughput. Joint radar-communication (JRC) systems integrate radar waveforms into the communication spectrum, eliminating the need for separate radar transceivers. This project develops High-Level Synthesis (HLS) IPs for JRC transceivers on FPGA, with analyses across various wireless environments. Key contributions include hardware IPs for LDPC encoders, scramblers, QPSK modulators, and an IEEE 802.11ad/ay-based OFDM PHY for single and multi-antenna systems, ultimately demonstrating the Bit Error Rate (BER) between input and output codewords.",
      trl: 4,
      sector: "Telecommunications",
      tech: "Wireless Communication, Internet of Things (IoT)",
      link: "#more-details-8",
    },
    {
      id: 13,
      name: "A low-RCS Circularly Polarized Reflectarray with a Linearly Polarized Feed",
      detail:
        "Circular polarization is preferred in communication systems due to its lower loss in multipath fading and better resistance to transmitter-receiver disorientation. We propose a circularly polarized (CP) reflectarray fed by a linearly polarized (LP) source, delivering a directive beam with high gain at its operating frequency and a low radar cross section (RCS) at out-of-band frequencies. While low-RCS linear polarized reflectarrays have been studied, the RCS reduction of a CP reflectarray with an LP feed has not been reported. Our proposed CP reflectarray, with its low-RCS characteristics, offers significant benefits for defense radars, especially for on-the-move ground applications, enabling secure communications while evading enemy radar surveillance.",
      trl: 4,
      sector: " Defense and Security",
      tech: "Communication Systems, Electromagnetic Engineering",
      link: "/Brochure_New/RCS_new.pdf",
    },

    {
      id: 6,
      name: "Optimization of Cellular Networks",
      detail:
        "The project focuses on analyzing a substantial dataset to pinpoint the root causes of cellular network interference issues, including antenna misorientation, interference from neighboring cell towers, signal attenuation, and low radiating power. Utilizing real-world data from LinkQuest and leveraging data analysis tools like NumPy and pandas, the objective is to identify key features that can visualize problematic areas. This analysis will inform necessary adjustments, such as realigning the antennas of cell towers, to enhance coverage and improve signal quality, particularly in remote regions.",
      trl: 3,
      sector:
        "Telecommunications,,Information Technology,Data Analytic,Network Infrastructure,Research and DevelopmentUrban Planning and Development,Environmental Monitoring",
      tech: "Technology Stack Overview for Cellular Network Interference Analysis",
      link: "#more-details-6",
    },
  ];

  // Filter data based on search inputs
  const filteredData = table_data.filter(
    (tech) =>
      (trlSearch === "" || tech.trl === parseInt(trlSearch)) &&
      (sectorSearch === "" ||
        tech.sector.toLowerCase().includes(sectorSearch.toLowerCase())) &&
      (nameSearch === "" ||
        tech.name.toLowerCase().includes(nameSearch.toLowerCase()))
  );

  // Calculate the indices for slicing the data array
  const indexOfLastItem = page * rowsPerPage + rowsPerPage;
  const indexOfFirstItem = page * rowsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle change in number of rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
  };

  // Handle search input changes
  const handleTrlSearchChange = (event) => {
    setTrlSearch(event.target.value);
    setPage(0); // Reset to first page on new search
  };

  const handleSectorSearchChange = (event) => {
    setSectorSearch(event.target.value);
    setPage(0); // Reset to first page on new search
  };

  const handleNameSearchChange = (event) => {
    setNameSearch(event.target.value);
    setPage(0); // Reset to first page on new search
  };

  return (
    <div className="all">
      <h1 className="techno_title">All Technology</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="number"
          placeholder="Search by TRL"
          value={trlSearch}
          onChange={handleTrlSearchChange}
        />
        <input
          type="text"
          placeholder="Search by Sector"
          value={sectorSearch}
          onChange={handleSectorSearchChange}
        />
        <input
          type="text"
          placeholder="Search by Name"
          value={nameSearch}
          onChange={handleNameSearchChange}
        />
      </div>

      {/* Table */}
      <table className="techno_table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Tech Name</th>
            <th>Tech Details</th>
            <th>TRL</th>
            <th>Sector</th>
            <th>Technology</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((tech, index) => (
            <tr key={tech.id}>
              <td>{indexOfFirstItem + index + 1}</td>
              <td>{tech.name}</td>
              <td>{tech.detail}</td>
              <td>{tech.trl}</td>
              <td>{tech.sector}</td>
              <td>{tech.tech}</td>
              <td>
                <a href={tech.link}>View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredData.length} // Total filtered items
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
      />

      {/* Submit Button */}
      <a href="https://forms.gle/EQZQJUwk25dnm34n9" className="submit-button">
        Submit Your Technology
      </a>
    </div>
  );
};

export default All_tech;
