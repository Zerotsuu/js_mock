/**
 * SurveySection Component
 * 
 * This component renders an individual survey section with its questions.
 * Each section has a unique visual style, title, and a set of questions with Likert scale ratings.
 * 
 * @param {string} id - Unique identifier for the section
 * @param {string} title - Title of the section
 * @param {Array} questions - Array of question objects for this section
 * @param {Function} onHelpClick - Callback function when help icon is clicked
 * @param {Function} onRadioChange - Callback function when a radio button is changed
 */
import QuestionRow from './QuestionRow';

export default function SurveySection({ id, title, questions, onHelpClick, onRadioChange }) {
  // Likert scale options for the radio buttons (1-5 rating)
  const likertOptions = ['1', '2', '3', '4', '5'];

  /**
   * Get section-specific visual elements based on section ID
   * Returns an object with image, color, and icon for the section
   */
  const getSectionVisual = () => {
    // Different images for each section - each image represents the theme of the section
    const sectionImages = {
      strategy: 'https://img.freepik.com/free-photo/business-planning-concept-with-wooden-blocks-with-icons-it_176474-9225.jpg',
      customer: 'https://img.freepik.com/free-photo/customer-experience-concept-businessman-using-computer-with-virtual-screen-pressing-smiley-face-emotion-face-icons_616485-61.jpg',
      organization: 'https://img.freepik.com/free-photo/business-people-meeting-planning-strategy-analysis-concept_53876-124773.jpg',
      operations: 'https://img.freepik.com/free-photo/business-process-management-diagram-concept_53876-125245.jpg',
      risk: 'https://img.freepik.com/free-photo/businessman-holding-virtual-screen-risk-management-business-concept_53876-104007.jpg',
      finance: 'https://img.freepik.com/free-photo/business-finance-accounting-concept-businessman-using-calculator-with-computer-laptop-analyzing-graph-chart-document-office_616485-58.jpg',
      data: 'https://img.freepik.com/free-photo/data-analysis-business-intelligence-bi-concept-businessman-analyst-looking-graphs-charts-dashboard-screen_616485-61.jpg'
    };

    // Different background colors for each section - using gradients for visual appeal
    const sectionColors = {
      strategy: 'bg-gradient-to-r from-blue-900 to-blue-700',
      customer: 'bg-gradient-to-r from-purple-900 to-purple-700',
      organization: 'bg-gradient-to-r from-green-900 to-green-700',
      operations: 'bg-gradient-to-r from-yellow-900 to-yellow-700',
      risk: 'bg-gradient-to-r from-red-900 to-red-700',
      finance: 'bg-gradient-to-r from-indigo-900 to-indigo-700',
      data: 'bg-gradient-to-r from-cyan-900 to-cyan-700'
    };

    // Different icons for each section - using emojis for simplicity
    const sectionIcons = {
      strategy: '🎯',
      customer: '👥',
      organization: '🏢',
      operations: '⚙️',
      risk: '⚠️',
      finance: '💰',
      data: '📊'
    };
    
    // Return visual elements with fallbacks if section ID is not recognized
    return {
      image: sectionImages[id] || 'https://6fikixnjm9.ufs.sh/f/W6lDwSyomLOB10jFAjEtaij7RU3fhC4HdI5bXcnkB0MvqxyG',
      color: sectionColors[id] || 'bg-[#15162c]',
      icon: sectionIcons[id] || '📋'
    };
  };

  // Get the visual elements for this section
  const sectionVisual = getSectionVisual();

  return (
    // Container for each survey section with unique ID for navigation
    <section id={id} className={`rounded-xl p-8 ${sectionVisual.color}`}>
      {/* Section title with icon */}
      <h2 className="mb-6 flex items-center text-2xl font-bold text-white">
        <span className="mr-2 text-3xl">{sectionVisual.icon}</span>
        {title}
      </h2>

      {/* Section visual image */}
      <div className="mb-6 h-32 w-full overflow-hidden rounded-lg bg-white/5 shadow-lg">
        <img 
          src={sectionVisual.image} 
          alt={`${title} visual`} 
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div> 
        
      {/* Questions table */}
      <div className="space-y-4">
        <table className="w-full">
          {/* Table header with Likert scale options */}
          <thead>
            <tr className="border-b border-white/10">
              <th className="w-1/2 pb-4 text-left text-lg font-medium text-white">Question</th>
              {/* Generate column headers for each Likert scale option */}
              {likertOptions.map((option) => (
                <th key={option} className="w-8 pb-4 text-center text-sm font-medium text-white">
                  {option}
                </th>
              ))}
              <th className="w-64 pb-4 text-left text-sm font-medium text-white">Comments</th>
            </tr>
          </thead>

          {/* Render individual question rows */}
          <tbody>
            {questions.map((question) => (
              <QuestionRow 
                key={question.id} 
                question={question} 
                onHelpClick={onHelpClick}
                onRadioChange={onRadioChange}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
} 