import React from 'react'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";

const WidgetList = ({userId, courseId, moduleId, lessonId, topicId, widgets, findAllWidgetsForTopic, createWidget,
                     updateWidget, deleteWidget, moveWidgetUp, moveWidgetDown, saveWidgetList, togglePreviewMode, previewing}) =>
    <div>
        <div id="save-and-preview" className="mt-3 mr-1 pr-4 text-right">
            <button id="save-btn"
                    type="button"
                    className="btn btn-success"
                    onClick={() => saveWidgetList(userId, courseId, moduleId, lessonId, topicId, widgets)}>
                Save
            </button>
            <label htmlFor="preview-btn" className="mx-3">Preview</label>
            <label id="preview-btn"
                   className="switch align-middle mt-2">
                <input
                    type="checkbox"
                    defaultChecked={false}
                    checked={previewing}
                    onClick={togglePreviewMode}
                    onChange={() => console.log(previewing)}/>
                <span className="slider round"/>
            </label>
        </div>
        <div id="widget-list" className="mt-4 border rounded">
            {
                widgets !== [] && widgets.map((widget, index) =>
                    <div className="mt-2 pl-4 pr-5 border-bottom" key={index}>
                        {widget.type === 'HEADING'
                        && <HeadingWidget
                                length={widgets.length}
                                index={index}
                                widget={widget}
                                deleteWidget={deleteWidget}
                                updateWidget={updateWidget}
                                moveWidgetUp={moveWidgetUp}
                                moveWidgetDown={moveWidgetDown}
                                previewing={previewing}/>}
                        {widget.type === 'PARAGRAPH'
                        && <ParagraphWidget
                                length={widgets.length}
                                index={index}
                                widget={widget}
                                deleteWidget={deleteWidget}
                                updateWidget={updateWidget}
                                moveWidgetUp={moveWidgetUp}
                                moveWidgetDown={moveWidgetDown}
                                previewing={previewing}/>}
                        {widget.type === 'LIST'
                        && <ListWidget
                                length={widgets.length}
                                index={index}
                                widget={widget}
                                deleteWidget={deleteWidget}
                                updateWidget={updateWidget}
                                moveWidgetUp={moveWidgetUp}
                                moveWidgetDown={moveWidgetDown}
                                previewing={previewing}/>}
                        {widget.type === 'IMAGE'
                        && <ImageWidget
                                length={widgets.length}
                                index={index}
                                widget={widget}
                                deleteWidget={deleteWidget}
                                updateWidget={updateWidget}
                                moveWidgetUp={moveWidgetUp}
                                moveWidgetDown={moveWidgetDown}
                                previewing={previewing}/>}
                        {widget.type === 'LINK'
                        && <LinkWidget
                                length={widgets.length}
                                index={index}
                                widget={widget}
                                deleteWidget={deleteWidget}
                                updateWidget={updateWidget}
                                moveWidgetUp={moveWidgetUp}
                                moveWidgetDown={moveWidgetDown}
                                previewing={previewing}/>}
                    </div>
                )
            }
        </div>
        <span id="addNewWidgetBtn"
              className="fa-stack fa-1x float-right mt-4"
              role="button">
            <i className="fas fa-square fa-stack-2x"/>
            <i className="fas fa-plus-circle fa-stack-1x fa-inverse"
               onClick={() =>
                   createWidget({
                       type: 'HEADING',
                       headingSize: 1,
                       headingText: "Heading text"
                   })}/>
        </span>
    </div>;

export default WidgetList;
