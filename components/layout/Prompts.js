import Image from "next/image"
const directory = {
    A: [
      {
        id: 1,
        name: 'Ada',
        role: 'REST API',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 2,
        name: 'Assembley Language',
        role: 'VP, Marketing',
        imageUrl:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 3,
        name: 'Bash',
        role: 'Account Coordinator',
        imageUrl:
          'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 4,
        name: 'C++',
        role: 'Senior Art Director',
        imageUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    B: [
      {
        id: 5,
        name: 'C#',
        role: 'Chief Strategy Officer',
        imageUrl:
          'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 6,
        name: 'C',
        role: 'Studio Artist',
        imageUrl:
          'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      { 
      id: 7,
      name: 'Cobol',
      role: 'Content Specialist',
      imageUrl:
        'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      {
        id: 7,
        name: 'Dart',
        role: 'Content Specialist',
        imageUrl:
          'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    C: [
      {
        id: 8,
        name: 'Fortran',
        role: 'Senior Art Director',
        imageUrl:
          'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 9,
        name: 'Go',
        role: 'Associate Creative Director',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    E: [
      {
        id: 10,
        name: 'Java',
        role: 'Junior Copywriter',
        imageUrl:
          'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 11,
        name: 'Javascript',
        role: 'Director, Print Operations',
        imageUrl:
          'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 12,
        name: 'Kotlin',
        role: 'Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 13,
        name: 'Chelsea Evans',
        role: 'Human Resources Manager',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    G: [
      {
        id: 14,
        name: 'Lua',
        role: 'Co-Founder / CTO',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 15,
        name: 'Objective-C',
        role: 'Manager, Business Relations',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    M: [
      {
        id: 16,
        name: 'Php',
        role: 'Studio Artist',
        imageUrl:
          'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 17,
        name: 'Perl',
        role: 'Front-end Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 18,
        name: 'Python',
        role: 'Partner, Creative',
        imageUrl:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    S: [
      {
        id: 19,
        name: 'Ruby',
        role: 'Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 20,
        name: 'Tom ',
        role: 'Director, Product Development',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    T: [
      {
        id: 21,
        name: 'Rust',
        role: 'Principal Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 22,
        name: 'Scala',
        role: 'Senior Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 23,
        name: 'Swift',
        role: 'Copywriter',
        imageUrl:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    W: [
      {
        id: 24,
        name: 'TypeScript',
        role: 'VP, Human Resources',
        imageUrl:
          'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 25,
        name: 'Visual Basic',
        role: 'VP, User Experience',
        imageUrl:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    Y: [
      {
        id: 26,
        name: 'Emma Young',
        role: 'Senior Front-end Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  }
  
  export default function Prompts() {
    return (
      <nav className="h-full overflow-y-auto bg-gray-800" aria-label="Directory">
        {Object.keys(directory).map((letter) => (
          <div key={letter} className="relative bg-gray-800">
            <div className="sticky top-0 z-10   bg-gray-800 px-6 py-1 text-sm font-medium text-gray-500">
              <h3>{letter}</h3>
            </div>
            <ul role="list" className="relative z-0 divide-y divide-gray-700">
              {directory[letter].map((person) => (
                <li key={person.id} className="bg-gray-900">
                  <div className="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 ">
                    <div className="flex-shrink-0">
                      <Image className="h-10 w-10 rounded-full" src={'https://plugins.jetbrains.com/files/12875/130789/icon/pluginIcon.png'}
                      width={100}
                      height={100}
                      alt="" />
                      
                    </div>
                    <div className="min-w-0 flex-1">
                      <a href="#" className="focus:outline-none">
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-white">{person.name}</p>
                        <p className="truncate text-sm text-gray-100">{person.role}</p>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    )
  }
  