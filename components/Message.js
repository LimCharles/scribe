const Message = (props) => {
  const { type, text } = props;
  return (
    <div className={`flex flex-row justify-start px-4 py-4 bg-slate-100 gap-4`}>
      <img
        style={{
          height: "30px",
          width: "30px",
          borderRadius: "8px",
        }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAA2ZJREFUaEPtWQtLMkEUvWtlRUVJbysfYRq96f//hKgsKdRKE60se2lUarYfZ8Rtd931Y2d2ImQPRGjcM3PvPXMfpBwcHKjUB1A8R/5YFr2M/LGEkJcRLyOSIuBJS1JguWm9jHCHToKhz+frj/I7Pj5OSqFQUO/v7yXE6fco5+fnSWm1WurR0dHvnSrhpEgkQoqqqmomk6FarSbhiN+hXF9fbzvy+vpKFxcXjk+dmpqiiYkJg121WiXw9UIgECDo+vv7m/2oqkovLy/0+fnp+A4w2NnZaTsCosPDQ8cky8vLBH3qAa7T01NqNpuWfMPDw7S1tdX1t/Pzc3p/f3d8Bxjs7++3HcGHVCpF9XrdMdH29jb5/X6DHS6Ei1kBTsAZPR4eHqhQKDg+GwaKohgdyWazBFk4hV2Er6+vqVKpGOiCwSAtLi4avms0GiyDvBgbGyPtjYAEEUFkeLCwsEBLS0tdEksmk9Rqtdj3dg7zKqFz2NzcHK2srPxI6+7ujkqlEo8fzGZjY4NGR0cN9m9vb5ROp9l3VpIqFotULpe5z4QhSu/09PSPI09PT5TL5bhJh4aGCO8FmtXj6uqKRkZGCLLSo9c7cnIJyAry0h473gfeiQhmZmYoHA53SczsHOrLyckJfX19iRzHbFF6EUTNEd5eYr5JJ0K9bogsPT8/CzsBAlZ6FeXHEVQYVBpRDAwMsChhIrWCG5nX88bjcWNGbm5u6Pb2VtQPZo/Ovbq62sWFLn58fMw6udvQpJXP5+nx8dEVfowtiJQZeBMoyTKgOeLW4Ai97u7uEiRmBQQLQXMbmiNIead5iRwSi8VocnKyJwV6C3qMm2COYMBDORSF3dsw8yJgkJjoW1lbW6PBwUFGzxxxo2LZVSsMj9FolDVFPTC2X15eCsVub29PkzBz5OzsjD4+PoRIrfpH5z1gOkbXNwM70P92l16XQkHp7ENKs9lURSuJVUc3y8dqsEQ5xtn4zYPZ2VkKhUJtaWWzWbYh8sJuxrJaCzY3N7skhhUbFZMHkDMqJOvsov+xspp67bq3ncREehhW5kQiIeYIj1ywWJknYdEhEhITykhnYNPLAqsAVoJesNpNRKuYkCM8upZl4zkiK7K8vF5GeCMny87LiKzI8vJ6GeGNnCw7LyOyIsvL2zcZ+QcaaiV1oyJT5wAAAABJRU5ErkJggg=="
      />
      <div>
        <p
          className="font-inter text-base font-normal leading-[30px]"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  );
};

export default Message;
