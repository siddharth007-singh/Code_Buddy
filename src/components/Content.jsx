import React from "react";

const questions = [
  {
    votes: 0,
    answers: 0,
    views: 5,
    title: "compiling git fails with cannot open test-results/p5332",
    description:
      "Compiling git with profile-fast-install exits with cannot open test-results/p5332-multi-pack-reuse.subtests...",
    tags: ["git", "ubuntu-22.04"],
    user: "Michael Teresi",
    time: "2 mins ago",
  },
  {
    votes: 0,
    answers: 0,
    views: 3,
    title: "Generic Tree Data Structure",
    description:
      "TLDR: How do I write abstract methods in Go? If that is not possible, what is the recommended workaround?",
    tags: ["go", "generics", "data-structures", "recursive-datastructures"],
    user: "lucas_turci 322",
    time: "2 mins ago",
  },
  {
    votes: 0,
    answers: 0,
    views: 5,
    title: "A2DP source being deactivated during playback",
    description:
      "I'm using a raspberry pi3 as a bluetooth speaker and I followed the guide linked here...",
    tags: ["audio", "bluetooth", "raspberry-pi3", "bluez", "pulseaudio"],
    user: "mattia rosati 1",
    time: "4 mins ago",
  },
  {
    votes: -1,
    answers: 0,
    views: 7,
    title: "Pycharm won't work and I keep getting an error message whenever I try to open it",
    description:
      "I'm taking 1000 days of code and Pycharm has stopped working. Can anyone decipher what this message means?",
    tags: ["python"],
    user: "user29989300",
    time: "4 mins ago",
  },
];

export default function QuestionsList() {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Newest Questions</h2>
        <a href="/ask-question">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Ask Question
          </button>
        </a>
      </div>


      <div className="border-b pb-2 mb-2 text-gray-500 flex items-center gap-4">
        <span>24,250,187 questions</span>
        <button className="px-3 py-1 bg-gray-200 text-black rounded-md">
          Newest
        </button>
      </div>


      {questions.map((q, index) => (
        <a href="">
          <div key={index} className="border-b py-4 flex gap-4">
            <div className="text-gray-500 text-sm w-16 flex flex-col items-center">
              <span>{q.votes} Votes</span>
              <span>{q.answers} answers</span>
              <span>{q.views} views</span>
            </div>

            <div className="flex-1">
              <h3 className="text-lg text-blue-600 font-medium">{q.title}</h3>
              <p className="text-gray-600 text-sm">{q.description}</p>
              <div className="flex gap-2 mt-2">
                {q.tags.map((tag, i)=>(
                  <span
                    key={i}
                    className="bg-gray-200 text-sm px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {q.user} asked {q.time}
              </p>
            </div>
          </div>
        </a>
      ))}

    </div>
  );
}
