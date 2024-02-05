function clock() {
    const element = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    element.innerHTML = timeString;
    setTimeout(clock, 100)
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function onload() {
    var a = getRandomInt(50)
    for (let i=0; i<=a; i++ ) {
        add(makeid(0), makeid(1), makeid(2), makeid(3), makeid(4), makeid(5), makeid(6), makeid(7), makeid(8), "-/-")
     }  
     
     async function smoothScrollToBottomAndTop(element) {
        const scrollHeight = element.scrollHeight;
        const delayBetweenScrolls = 70000;
    
        await new Promise(resolve => {
            function animateScroll(timestamp, start, target) {
                const currentTime = timestamp || performance.now();
                const progress = Math.min((currentTime - start) / delayBetweenScrolls, 1);
    
                element.scrollTop = start + progress * (target - start);
    
                if (progress < 1) {
                    requestAnimationFrame(newTimestamp => animateScroll(newTimestamp, start, target));
                } else {
                    setTimeout(() => {
                        element.scrollTop = 0; // Scroll back to the top
                        resolve();
                    }, delayBetweenScrolls);
                }
            }
    
            const start = element.scrollTop;
            const target = scrollHeight;
    
            requestAnimationFrame(newTimestamp => animateScroll(newTimestamp, start, target));
        });
    }
    
    // Assuming you have an element with the class 'tile'
    const tileElement = document.querySelectorAll('.tile');
    
    // Call the function to scroll the element to the bottom and then to the top smoothly
    tileElement.forEach(element => {
        smoothScrollToBottomAndTop(element);    
    })
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function makeid(id) {
    if (id === 0) {
        return (getRandomInt(9) + 5) + makeContent(1, 'abcdef')
    } else if (id === 1) {
        return getRandomInt(5) + 1
    } else if (id == 4 || id == 3) {
        const subjects = ['Math', 'Science', 'History', 'English', 'Physics', 'Chemistry', 'Biology', 'Geography'];
        const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
        return `${randomSubject}`;
    } else if (id == 5 || id == "6") {
        const min = 100;
        const max = 999;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (id == 7 || id == 8) {
        const familyNamePrefixes = ["Fr", "Hr"];
        const randomFamilyNamePrefix = familyNamePrefixes[Math.floor(Math.random() * familyNamePrefixes.length)];

        const familyNames = ["Müller", "Schmidt", "Becker", "Schulz", "Fischer", "Hoffmann", "Schäfer", "Koch"];
        const randomFamilyName = familyNames[Math.floor(Math.random() * familyNames.length)];

        return `${randomFamilyNamePrefix}.${randomFamilyName}`;
    } else if(id == 2) {
        return ""
    }
}

function makeContent(length, characters) {
    let result = ''
    const charactersLength = characters.length
    let counter = 0
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
      counter += 1
    }
    return result
}

function add(_class, hour, art, lesson, lesson_old, room, room_old, teacher, teacher_old, additionalinfo) {
    var rowid;
    const __class = _class.replace(/[^0-9]/g, '')
    if (__class > 10) {
        rowid = "table-right"
    } else {
        rowid = "table-left"
    }

    
    addRow(rowid, _class, hour, art, lesson, lesson_old, room, room_old, teacher, teacher_old, additionalinfo)
}
 
function addRow(rowid, _class, hour, art, lesson, lesson_old, room, room_old, teacher, teacher_old, additionalinfo) {
    var tr = document.getElementById(rowid).appendChild(document.createElement('tr'))
    var __class = tr.appendChild(document.createElement('td'))
    __class.innerHTML = _class
    var __hour = tr.appendChild(document.createElement('td'))
    __hour.innerHTML = hour
    var __art = tr.appendChild(document.createElement('td'))
    __art.innerHTML = art
    var __lesson = tr.appendChild(document.createElement('td'))
    __lesson.innerHTML = lesson
    var __lesson_old = tr.appendChild(document.createElement('td'))
    __lesson_old.innerHTML = lesson_old
    var __room = tr.appendChild(document.createElement('td'))
    __room.innerHTML = room
    var __room_old = tr.appendChild(document.createElement('td'))
    __room_old.innerHTML = room_old
    var __teacher = tr.appendChild(document.createElement('td'))
    __teacher.innerHTML = teacher
    var __teacher_old = tr.appendChild(document.createElement('td'))
    __teacher_old.innerHTML = teacher_old
    var __additionalinfo = tr.appendChild(document.createElement('td'))
    __additionalinfo.innerHTML = additionalinfo
}