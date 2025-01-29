import deptImages from "../assets/cards";

export const generateDeparts = () => {
    const deptTitles = [
        "Cardiology",
        "Neurology",
        "Orthopedics",
        "ENT",
        "Urology",
        "Gastroenterology",
        "Pulmonology",
        "Ophthalmology",
        "Dermatology",
        "Odontology",
    ];

    const deptDescription = [
        "Comprehensive care for your heart with diagnostic and treatment options.",
        "Expert treatment for brain, spinal cord, and nervous system disorders.",
        "Advanced solutions for bone, joint, and muscle health to keep you active.",
        "Dedicated care for ear, nose, and throat issues with a focus on lasting solutions.",
        "Specialized care for urinary tract and male reproductive system health.",
        "Comprehensive digestive care for stomach, intestines, and liver issues.",
        "Specialized care for lung health and respiratory disorders.",
        "Precision eye care for clear vision and healthy eyes.",
        "Comprehensive skin care solutions for all your dermatological needs.",
        "Advanced dental care for a healthy smile and strong teeth.",
    ];

    return deptTitles.map((deptTitle, deptIndex) => ({
        image: deptImages[deptIndex],
        title: deptTitle,
        description: deptDescription[deptIndex]
    })
    );

}