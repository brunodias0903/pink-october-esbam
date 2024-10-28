import { Card, CardContent, CardTitle } from "./styles";

export interface CustomCardProps {
  title: string;
  content?: string;
  backgroundColor: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  content,
  backgroundColor,
}) => {
  return (
    <Card style={{ backgroundColor: backgroundColor }}>
      <CardTitle className="card-title">{title}</CardTitle>
      <CardContent className="card-content">
        <p>{content}</p>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
