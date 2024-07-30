type MCQOption = {
    answer: string;
    id: string;
};

type MCQUser = {
    avatar: string;
    name: string;
};

type MCQ = {
    description: string;
    id: number;
    image: string;
    options: MCQOption[];
    playlist: string;
    question: string;
    type: string;
    user: MCQUser;
};
