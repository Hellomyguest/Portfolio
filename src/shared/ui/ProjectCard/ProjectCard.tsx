import { useState } from "react";
import {
  GithubOutlined,
  LinkOutlined,
  PlayCircleFilled,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Card,
  Modal,
  Space,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import { useUnit } from "effector-react";
import { $theme } from "../../../features/theme-switcher/model/model";
import styles from "./ProjectCard.module.scss";

const { Meta } = Card;
const { Title } = Typography;

type ProjectCardProps = {
  title: string;
  link?: string;
  githubLink?: string;
  tags?: string[];
  cover: string;
  video?: string;
};

export const ProjectCard = ({
  title,
  link,
  githubLink,
  tags,
  cover,
  video,
}: ProjectCardProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleClickOpenModal = () => setModalOpen(true);
  const handleClickCloseModal = () => {
    setModalOpen(false);
  };
  const themeValue = useUnit($theme);

  return (
    <>
      <Badge
        count={
          video ? (
            <PlayCircleFilled className={styles.badge} />
          ) : (
            <LinkOutlined className={styles.badge} />
          )
        }
      >
        <Card
          hoverable
          className={styles.card}
          cover={
            <Button
              type="link"
              href={video ? undefined : link}
              target={video ? undefined : "_blank"}
              className={styles.button}
              onClick={video ? handleClickOpenModal : () => {}}
            >
              <img alt="cover" src={cover} className={styles.cover} />
            </Button>
          }
        >
          <Meta
            title={
              <Title level={5} className={styles.title}>
                {title}{" "}
                {githubLink && (
                  <Tooltip title="Github repo">
                    <Button
                      type="link"
                      href={githubLink}
                      target="_blank"
                      size="small"
                      icon={
                        <GithubOutlined
                          className={
                            themeValue === "dark"
                              ? styles.gitIcon_dark
                              : styles.gitIcon
                          }
                        />
                      }
                      onClick={(e) => e.stopPropagation()}
                    />
                  </Tooltip>
                )}
              </Title>
            }
            description={
              tags && (
                <Space size="small" wrap className={styles.tags}>
                  {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </Space>
              )
            }
          />
        </Card>
      </Badge>
      {video && (
        <Modal
          centered
          width="fit-content"
          open={isModalOpen}
          onCancel={handleClickCloseModal}
          cancelButtonProps={{ className: styles.display_none }}
          okButtonProps={{ className: styles.display_none }}
        >
          <video controls src={video} className={styles.video}>
            <track kind="captions" />
          </video>
        </Modal>
      )}
    </>
  );
};

ProjectCard.defaultProps = {
  link: null,
  githubLink: null,
  video: null,
  tags: null,
};
