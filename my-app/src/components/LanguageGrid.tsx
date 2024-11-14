import React, { useState } from 'react';
import { Badge, toolData, ToolTypeEnum, ToolSubTypeEnum } from '../data/toolData';

// Type for grouping tool data by type and subtype
type GroupedToolData = {
  [key in ToolTypeEnum]: {
    [key in ToolSubTypeEnum]: Badge[];
  };
};

// Initialize groupedToolData with an explicit type
const groupedToolData: GroupedToolData = toolData.reduce((acc: GroupedToolData, logo: Badge) => {
  const typeKey = logo.type as ToolTypeEnum;
  const subTypeKey = logo.subType as ToolSubTypeEnum;

  // Initialize type and subtype if they don't exist
  if (!acc[typeKey]) {
    acc[typeKey] = {
      [ToolSubTypeEnum.BestAt]: [],
      [ToolSubTypeEnum.Confident]: [],
      [ToolSubTypeEnum.HaveUsed]: [],
    };
  }
  acc[typeKey][subTypeKey].push(logo);
  return acc;
}, {} as GroupedToolData);

const LanguageGrid: React.FC = () => {
  // State to track the show/hide status for each ToolTypeEnum and ToolSubTypeEnum combination
  const [showStatus, setShowStatus] = useState<{ [key: string]: boolean }>(
    // Set "Best At" categories to be open by default
    Object.keys(groupedToolData).reduce((acc, type) => {
      acc[`${type}-${ToolSubTypeEnum.BestAt}`] = true;
      return acc;
    }, {} as { [key: string]: boolean })
  );

  // Toggle function for the show/hide status
  const toggleShow = (type: ToolTypeEnum, subType: ToolSubTypeEnum) => {
    const key = `${type}-${subType}`;
    setShowStatus((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <section className="py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">Technologies I Use</h2>

        {/* Render each tool type group */}
        {Object.keys(groupedToolData).map((type, typeIndex) => (
          <div key={typeIndex} className="mb-12">
            <h3 className="text-xl font-semibold mb-4">
              {ToolTypeEnum[type as keyof typeof ToolTypeEnum]}
            </h3>

            {/* Render each subtype within the tool type */}
            {Object.values(ToolSubTypeEnum).map((subType, subTypeIndex) => {
              const key = `${type}-${subType}`;
              const tools = groupedToolData[type as ToolTypeEnum][subType as ToolSubTypeEnum];

              if (tools.length === 0) return null; // Skip if there are no tools in this subtype

              return (
                <div key={subTypeIndex} className="mb-4 text-left">
                  <div className="flex justify-between items-center">
                    <h4 className={`text-ml font-bold ${subType === ToolSubTypeEnum.BestAt ? 'text-blue-600' : 'text-gray-600'}`}>
                      {subType === ToolSubTypeEnum.BestAt && "🌟"} {subType}
                    </h4>
                    {subType !== ToolSubTypeEnum.BestAt && (
                      <button
                      onClick={() => toggleShow(type as ToolTypeEnum, subType as ToolSubTypeEnum)}
                      className="px-4 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition"
                    >
                      {showStatus[key] ? 'Hide' : 'Show'}
                    </button>
                    )}
                    
                  </div>

                  {/* Badge Grid for visible subtypes */}
                  {showStatus[key] && (
                    <div className="flex flex-wrap justify-center gap-4 mt-2">
                      {tools.map((logo: Badge, logoIndex: number) => (
                        <a
                          key={logoIndex}
                          href={logo.url || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <img src={logo.badge_url} alt={logo.name} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguageGrid;
