const LESSON_PROGRESS_KEY = 'montenegrin_lesson_progress_v1';

let lessonProgressCache = null;

function ensureLessonProgress() {
    if (!lessonProgressCache) {
        try {
            const stored = localStorage.getItem(LESSON_PROGRESS_KEY);
            lessonProgressCache = stored ? JSON.parse(stored) : {};
        } catch (error) {
            console.warn('Could not load lesson progress from storage', error);
            lessonProgressCache = {};
        }
    }
    return lessonProgressCache;
}

function persistLessonProgress() {
    try {
        localStorage.setItem(LESSON_PROGRESS_KEY, JSON.stringify(lessonProgressCache || {}));
    } catch (error) {
        console.warn('Could not save lesson progress', error);
    }
}

function getLessonStatus(lessonId) {
    const progress = ensureLessonProgress();
    return progress[lessonId] || 'not_started';
}

function setLessonStatus(lessonId, status) {
    const progress = ensureLessonProgress();
    progress[lessonId] = status;
    persistLessonProgress();
}

function getLessonProgressSummary(lessons) {
    const progress = ensureLessonProgress();
    const summary = {
        total: lessons.length,
        available: lessons.filter(lesson => lesson.available).length,
        locked: lessons.filter(lesson => !lesson.available).length,
        completed: 0,
        inProgress: 0,
        notStarted: 0
    };

    lessons.forEach(lesson => {
        if (!lesson.available) {
            return;
        }
        const status = progress[lesson.id] || 'not_started';
        if (status === 'completed') {
            summary.completed += 1;
        } else if (status === 'in_progress') {
            summary.inProgress += 1;
        } else {
            summary.notStarted += 1;
        }
    });

    summary.percentComplete = summary.available
        ? Math.round((summary.completed / summary.available) * 100)
        : 0;

    return summary;
}

function getNextLessonToStudy(lessons) {
    const progress = ensureLessonProgress();
    return lessons.find(lesson => lesson.available && progress[lesson.id] !== 'completed') || null;
}

function setupHeroScriptToggle() {
    const scripts = document.querySelectorAll('.script');
    const exampleWord = document.getElementById('example-word');

    if (!scripts.length || !exampleWord) {
        return;
    }

    const words = {
        latin: 'Zdravo',
        cyrillic: 'Здраво'
    };

    scripts.forEach(script => {
        script.addEventListener('click', function() {
            scripts.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            const selectedScript = this.dataset.script;
            exampleWord.textContent = words[selectedScript];
        });
    });
}

function setupSmoothScrolling() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    if (!anchors.length) {
        return;
    }

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') {
                return;
            }
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function updateDashboard() {
    if (typeof lessonsData === 'undefined') {
        return;
    }

    const dashboardEl = document.querySelector('.dashboard');
    if (!dashboardEl) {
        return;
    }

    const lessons = Object.values(lessonsData).sort((a, b) => a.order - b.order);
    const summary = getLessonProgressSummary(lessons);
    const nextLesson = getNextLessonToStudy(lessons);

    const progressBar = document.getElementById('dashboard-progress-bar');
    const progressLabel = document.getElementById('dashboard-progress-percent');
    if (progressBar) {
        progressBar.style.width = `${summary.percentComplete}%`;
    }
    if (progressLabel) {
        progressLabel.textContent = `${summary.percentComplete}%`;
    }

    const statComplete = document.getElementById('stat-lessons-complete');
    const statInProgress = document.getElementById('stat-lessons-progress');
    const statLocked = document.getElementById('stat-lessons-locked');
    const statTotal = document.getElementById('stat-lessons-total');

    if (statComplete) statComplete.textContent = summary.completed;
    if (statInProgress) statInProgress.textContent = summary.inProgress;
    if (statLocked) statLocked.textContent = summary.locked;
    if (statTotal) statTotal.textContent = summary.available;

    const chartConfig = [
        { id: 'chart-completed', value: summary.completed },
        { id: 'chart-progress', value: summary.inProgress },
        { id: 'chart-not-started', value: summary.notStarted }
    ];

    chartConfig.forEach(cfg => {
        const el = document.getElementById(cfg.id);
        if (!el) return;
        const height = summary.available ? Math.round((cfg.value / summary.available) * 100) : 0;
        el.style.height = `${height}%`;
        el.textContent = cfg.value;
    });

    const nextLessonContent = document.getElementById('next-lesson-content');
    if (nextLessonContent) {
        if (nextLesson) {
            const status = getLessonStatus(nextLesson.id);
            const statusClass = status === 'in_progress' ? 'lesson-status progress' : 'lesson-status';
            const statusLabel = status === 'in_progress' ? 'In Progress' : 'Not Started';
            nextLessonContent.innerHTML = `
                <h3>${nextLesson.title}</h3>
                <p class="lesson-row-description">${nextLesson.goal}</p>
                <div class="lesson-meta-row" style="margin-top: 1rem;">
                    <span class="level-badge">${nextLesson.level}</span>
                    <span class="${statusClass}">${statusLabel}</span>
                </div>
                <a class="pill-btn" href="lesson.html?lesson=${nextLesson.order}">Continue Lesson</a>
            `;
        } else {
            nextLessonContent.innerHTML = `
                <h3>All lessons completed! 🎉</h3>
                <p class="lesson-row-description">Great job! You can review lessons or jump into practice quizzes to keep your streak.</p>
                <div class="quick-actions" style="margin-top: 1.25rem;">
                    <a href="lessons.html">
                        <div class="quick-link">
                            <span>Browse Lessons</span>
                            <span>→</span>
                        </div>
                    </a>
                    <a href="quiz.html">
                        <div class="quick-link">
                            <span>Start a Quiz</span>
                            <span>→</span>
                        </div>
                    </a>
                </div>
            `;
        }
    }
}

function renderLessonsList() {
    if (typeof lessonsData === 'undefined') {
        return;
    }

    const listContainer = document.getElementById('lessons-list-container');
    if (!listContainer) {
        return;
    }

    const lessons = Object.values(lessonsData).sort((a, b) => a.order - b.order);
    let activeFilter = 'all';

    const filterChips = document.querySelectorAll('[data-filter]');
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activeFilter = chip.dataset.filter;
            drawLessons();
        });
    });

    function drawLessons() {
        listContainer.innerHTML = '';
        const progress = ensureLessonProgress();

        lessons.forEach(lesson => {
            const status = lesson.available ? (progress[lesson.id] || 'not_started') : 'locked';
            if (!matchesFilter(status)) {
                return;
            }

            const row = document.createElement('div');
            row.className = 'lesson-row';

            const number = document.createElement('div');
            number.className = 'lesson-number';
            number.textContent = lesson.order;

            const content = document.createElement('div');
            const title = document.createElement('h3');
            title.textContent = lesson.title;

            const metaRow = document.createElement('div');
            metaRow.className = 'lesson-meta-row';

            const levelBadge = document.createElement('span');
            levelBadge.className = 'level-badge';
            levelBadge.textContent = lesson.level;

            const statusBadge = document.createElement('span');
            statusBadge.className = 'lesson-status ' + getStatusClass(status);
            statusBadge.textContent = getStatusLabel(status);

            metaRow.appendChild(levelBadge);
            metaRow.appendChild(statusBadge);

            const description = document.createElement('p');
            description.className = 'lesson-row-description';
            description.textContent = lesson.goal;

            content.appendChild(title);
            content.appendChild(metaRow);
            content.appendChild(description);

            const actions = document.createElement('div');
            actions.className = 'lesson-row-actions';

            if (lesson.available) {
                const actionLink = document.createElement('a');
                actionLink.className = 'pill-btn';
                actionLink.href = `lesson.html?lesson=${lesson.order}`;
                actionLink.textContent = status === 'completed' ? 'Review Lesson' : 'Start Lesson';
                actions.appendChild(actionLink);
            } else {
                const comingSoon = document.createElement('span');
                comingSoon.className = 'locked-badge';
                comingSoon.textContent = 'Coming Soon';
                actions.appendChild(comingSoon);
            }

            row.appendChild(number);
            row.appendChild(content);
            row.appendChild(actions);

            listContainer.appendChild(row);
        });

        if (!listContainer.children.length) {
            listContainer.innerHTML = '<p style="text-align:center; color: var(--text-light);">No lessons match this filter yet.</p>';
        }
    }

    function matchesFilter(status) {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'completed') return status === 'completed';
        if (activeFilter === 'in-progress') return status === 'in_progress';
        if (activeFilter === 'not-started') return status === 'not_started';
        if (activeFilter === 'locked') return status === 'locked';
        return true;
    }

    function getStatusClass(status) {
        if (status === 'completed') return 'complete';
        if (status === 'in_progress') return 'progress';
        if (status === 'locked') return 'locked';
        return '';
    }

    function getStatusLabel(status) {
        switch (status) {
            case 'completed':
                return 'Completed';
            case 'in_progress':
                return 'In Progress';
            case 'locked':
                return 'Locked';
            default:
                return 'Not Started';
        }
    }

    drawLessons();
}

document.addEventListener('DOMContentLoaded', () => {
    setupHeroScriptToggle();
    setupSmoothScrolling();
    updateDashboard();
    renderLessonsList();
});

