type TasksSidebarContentProps = {
  children: React.ReactNode;
};

/**
 * The tasks sidebar content.
 */
function TasksSidebarContent(props: TasksSidebarContentProps) {
  const { children } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: 'background.paper' }}>
      {children}
    </div>
  );
}

export default TasksSidebarContent;