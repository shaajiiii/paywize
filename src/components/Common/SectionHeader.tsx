type SectionHeaderProps = {
  title: string;
  subTitle?: string;
  children?: React.ReactNode;
};

export const SectionHeader = ({
  title,
  subTitle,
  children,
}: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between w-full py-6">
      <div className="flex items-center divide-x divide-gray-200">
        <h2 className="pr-4 text-lg font-bold text-gray-800">{title}</h2>
        {subTitle && (
          <span className="pl-4 text-sm font-semibold text-gray-600">
            {subTitle}
          </span>
        )}
      </div>

      {children && <div className="ml-4">{children}</div>}
    </div>
  );
};
